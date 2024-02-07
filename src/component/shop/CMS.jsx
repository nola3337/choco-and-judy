import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ProductActions } from "../../store/ProductSlice";
import {
  Form,
  useNavigation,
  useActionData,
  useNavigate,
} from "react-router-dom";

export default function CMS() {
  const img = useRef();
  const [loadImg, setLoadImg] = useState();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === "submitting";

  function handleSubmit(event) {
    // event.preventDefault();

    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());

    dispatch(ProductActions.addNewProduct(data));

    // event.target.reset();

    navigate("/shop");
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
      <Form method="post" onSubmit={handleSubmit} className="cms-form">
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
          <input name="name" type="text" required />
        </div>
        <div className="cms-form-input">
          <label>商品圖片</label>
          <input
            onChange={handleLoadImg}
            ref={img}
            name="img"
            type="file"
            accept="image/*"
            required
          />
        </div>
        {loadImg && <img src={loadImg} alt="Preview" />}
        <div className="cms-form-input">
          <label>商品分類</label>
          <select name="type" required>
            請選擇分類
            <option value="">請選擇分類</option>
            <option value="巧克力">巧克力</option>
            <option value="美味蛋糕">美味蛋糕</option>
            <option value="經典餅乾">經典餅乾</option>
          </select>
        </div>
        <div className="cms-form-input">
          <label>商品價格</label>
          <input name="price" type="number" min="0" required />
        </div>
        <div className="cms-form-input">
          <label>是否設為人氣商品?</label>
          <label>是</label>
          <input name="isHot" type="radio" value="yes" required />
          <label>否</label>
          <input name="isHot" type="radio" value="no" required />
        </div>
        <div className="cms-form-input">
          <label>商品描述</label>
          <textarea name="description" cols="40" rows="10" required></textarea>
        </div>
        <button type="submit" disabled={isSubmitting} className="btn">
          {isSubmitting ? "Submitting..." : "儲存"}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  const data = Object.fromEntries(await request.formData());

  const productData = {
    id: Math.random(),
    name: data.name,
    type: data.type,
    price: data.price,
    isHot: data.isHot,
    description: data.description,
  };

  const response = await fetch(
    "https://choco04-e8edd-default-rtdb.firebaseio.com/judy.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }
  );

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    console.log("failed!");
  }
}
