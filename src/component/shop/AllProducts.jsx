import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import p1 from "../../styles/img/products/cococake-p.webp";
import p2 from "../../styles/img/products/ichigo-p.webp";
import p3 from "../../styles/img/products/heart-p.webp";
import p4 from "../../styles/img/products/starchoco-p.webp";
import p5 from "../../styles/img/products/creamcupcake-p.webp";
import p6 from "../../styles/img/products/chococookies-p.webp";
import p7 from "../../styles/img/products/tilamisu-p.webp";
import p8 from "../../styles/img/products/stars-p.webp";
import p9 from "../../styles/img/products/cupcake-p.webp";

export default function AllProducts() {
  const productList = useSelector((state) => state.product.products);

  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/products">
          <span>商品一覽</span>
        </Link>
      </div>

      <div className="product-page">
        <h2>商品一覽</h2>
        <ul className="product-list">
          {productList.map((item) => {
            return (
              <li key={item.id} className="product-list-card">
                <Link to={`/shop/${item.id}`}>
                  <img src={p1} alt={item.name} />
                </Link>
                <div className="product-list-card-info">
                  <Link to={`/shop/${item.id}`}>{item.name}</Link>
                  <span>NT&#36;{item.price}</span>
                  <button className="btn product-list-card-info-btn">
                    <span>加入購物車</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
