import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { fetchEditData } from "../../http";
import { useQuery } from "@tanstack/react-query";
import {
  Form,
  useNavigation,
  useActionData,
  useNavigate,
  redirect,
} from "react-router-dom";

export default function CMSForm({ method }) {
  const img = useRef();
  const form = useRef();
  const [loadImg, setLoadImg] = useState();

  const currentData = useSelector((state) => state.product.currentProduct);
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === "submitting";

  let editData;

  let imgPath = "";

  if (method === "patch") {
    // editData = data.productData;

    editData = currentData;

    imgPath = `${process.env.PUBLIC_URL}/products/${editData.img}`;
  }

  function handleSubmit() {
    // event.preventDefault();

    // event.target.reset();

    navigate("/cms");
  }

  function handleLoadImg() {
    const file = img.current.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setLoadImg(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="cms">
      <Form
        ref={form}
        method={method}
        onSubmit={handleSubmit}
        className="cms-form"
      >
        <h2>新增商品</h2>
        {actionData && actionData.errors && (
          <ul>
            {Object.values(actionData.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        <div className="cms-form-input">
          <label>商品名稱</label>
          <input
            className="input-long"
            name="name"
            type="text"
            defaultValue={editData?.name}
            required
          />
        </div>
        <div className="cms-form-input">
          <label>商品圖片</label>
          <input
            className="input-long"
            onChange={handleLoadImg}
            ref={img}
            name="img"
            type="file"
            accept="image/*"
          />
        </div>
        {loadImg && <img src={loadImg} alt="Preview" />}
        {editData && <img src={imgPath} alt={editData?.name} />}
        <div className="cms-form-input">
          <label>商品分類</label>
          <select name="type" defaultValue={editData?.type} required>
            請選擇分類
            <option value="">請選擇分類</option>
            <option value="巧克力">巧克力</option>
            <option value="美味蛋糕">美味蛋糕</option>
            <option value="經典餅乾">經典餅乾</option>
          </select>
        </div>
        <div className="cms-form-input">
          <label>商品價格</label>
          <input
            className="input-long"
            name="price"
            type="number"
            min="0"
            defaultValue={editData?.price}
            required
          />
        </div>
        <div className="cms-form-input">
          <label>是否設為人氣商品?</label>
          <label>是</label>
          <input
            name="isHot"
            type="radio"
            value="yes"
            defaultChecked={editData?.isHot === "yes"}
            required
          />
          <label>否</label>
          <input
            name="isHot"
            type="radio"
            value="no"
            defaultChecked={editData?.isHot === "no"}
            required
          />
        </div>
        <div className="cms-form-input">
          <label>商品描述</label>
          <textarea
            name="description"
            cols="40"
            rows="10"
            defaultValue={editData?.description}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-cms-form"
        >
          {isSubmitting ? "Submitting..." : "儲存"}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  const data = Object.fromEntries(await request.formData());

  let url = "";

  let img = data.img;

  let id = Math.random();

  let isInCart = data.editData;

  let editData;

  const fetchDataResult = await fetchEditData();

  if (fetchDataResult && request.method === "PATCH") {
    editData = fetchDataResult.productData;

    url = `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${editData.key}.json`;

    img = editData.img;

    id = editData.id;

    isInCart = editData.isInCart;
  }

  if (request.method === "POST") {
    url = "https://choco04-e8edd-default-rtdb.firebaseio.com/judy.json";
  }

  const productData = {
    id,
    img,
    name: data.name,
    type: data.type,
    price: data.price,
    isHot: data.isHot,
    description: data.description,
    isInCart,
    isEdit: false,
  };

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    console.log("failed!");
  }

  return redirect("/cms");
}
