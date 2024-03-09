import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../http";

export default function ListItem({ data }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const imgPath = `${process.env.PUBLIC_URL}/products/${data.img}`;

  if (data.key === "isEdit") {
    return null;
  }

  return (
    <li className="product-list-card">
      <Link to={`/shop/${data.id}`}>
        <img src={imgPath} alt={data.name} />
      </Link>
      <div className="product-list-card-info">
        <Link to={`/shop/${data.id}`}>{data.name}</Link>
        <span>NT&#36;{data.price}</span>
        <button onClick={() => mutate(data.key)} className="btn btn-addtocard">
          <span>加入購物車</span>
        </button>
      </div>
    </li>
  );
}
