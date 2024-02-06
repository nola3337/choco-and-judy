import p1 from "../../styles/img/products/cococake-p.webp";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Item() {
  const productList = useSelector((state) => state.product.products);
  const params = useParams();

  const product = productList.find((item) => {
    return item.id.toString() === params.id;
  });

  let classes;

  if (product.type && product.type === "巧克力") {
    classes = "chocolate";
  } else if (product.type === "美味蛋糕") {
    classes = "cake";
  } else if (product.type === "經典餅乾") {
    classes = "cookie";
  }

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
          <img src={p1} alt={product && product.name} />
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
          <button className="btn product-list-card-info-btn item-buy-btn">
            <span>加入購物車</span>
          </button>
        </div>
      </div>
    </div>
  );
}
