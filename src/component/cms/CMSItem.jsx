import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../http";
import { toEditProduct } from "../../http";
import { useDispatch } from "react-redux";
import { ProductActions } from "../../store/ProductSlice.js";

export default function CMSItem({ data }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const imgPath = `${process.env.PUBLIC_URL}/products/${data.img}`;

  const onEdit = useMutation({
    mutationFn: toEditProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-edit"] });
    },
  });

  const onDelete = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  function handleToEdit(data) {
    dispatch(ProductActions.setEditProduct(data));

    onEdit.mutate(data);
  }

  function handleDelete(data) {
    const deleteConfirm = window.confirm("確定要刪除商品?");

    if (deleteConfirm) {
      onDelete.mutate(data);
    }
  }

  if (data.key === "isEdit") {
    return null;
  }

  return (
    <li key={data.id} className="product-list-card">
      <Link to={`/shop/${data.id}`}>
        <img src={imgPath} alt={data.name} />
      </Link>
      <div className="product-list-card-info">
        <Link to={`/shop/${data.id}`}>{data.name}</Link>
        <span>NT&#36;{data.price}</span>
        <div className="product-list-card-info-cms-btns">
          <Link to="/cms/edit-product">
            <button
              onClick={() => handleToEdit(data)}
              className="btn btn-addtocard"
            >
              <span>編輯</span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(data.key)}
            className="btn btn-addtocard"
          >
            <span>刪除</span>
          </button>
        </div>
      </div>
    </li>
  );
}
