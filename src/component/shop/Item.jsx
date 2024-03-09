import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../http";

export default function Item() {
  const params = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  let dataArray = [];

  let product;

  if (data) {
    dataArray = Object.entries(data).map(([key, value]) => ({
      ...value,
      key: key,
    }));

    product = dataArray.find((item) => {
      return item.id.toString() === params.id;
    });
  }

  let classes;

  if (product.type && product.type === "巧克力") {
    classes = "chocolate";
  } else if (product.type === "美味蛋糕") {
    classes = "cake";
  } else if (product.type === "經典餅乾") {
    classes = "cookie";
  }

  const imgPath = `${process.env.PUBLIC_URL}/products/${product.img}`;

  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to={`/shop/${classes}`}>
          <span>{product && product.type}</span>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <span>{product && product.name}</span>
      </div>
      <div className="item">
        <div className="item-img">
          <img src={imgPath} alt={product && product.name} />
        </div>
        <div className="item-text">
          <h2>{product && product.name}</h2>
          <hr />
          <p>{product && product.description}</p>
        </div>
        <div className="item-buy">
          <span className="item-buy-text">優惠價</span>
          <span className="item-buy-price">
            NT&#36;{product && product.price}
          </span>
          <button
            onClick={() => mutate(product.key)}
            className="btn btn-addtocard btn-product-info"
          >
            <span>加入購物車</span>
          </button>
        </div>
      </div>
    </div>
  );
}
