import { Link } from "react-router-dom";

import p3 from "../../styles/img/products/heart-p.webp";
import p4 from "../../styles/img/products/starchoco-p.webp";
import p8 from "../../styles/img/products/stars-p.webp";

export default function ChocolateProducts() {
  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/chocolate">
          <span>巧克力</span>
        </Link>
      </div>

      <div className="product-page">
        <h2>巧克力</h2>
        <ul className="product-list">
          <li className="product-list-card">
            <img src={p3} alt="愛心巧克力" />
            <div className="product-list-card-info">
              <Link to="/">愛心巧克力</Link>
              <span>NT$500</span>
              <button className="btn product-list-card-info-btn">
                <span>加入購物車</span>
              </button>
            </div>
          </li>
          <li className="product-list-card">
            <img src={p4} alt="榛果巧克力" />
            <div className="product-list-card-info">
              <Link to="/">榛果巧克力</Link>
              <span>NT$490</span>
              <button className="btn product-list-card-info-btn">
                <span>加入購物車</span>
              </button>
            </div>
          </li>
          <li className="product-list-card">
            <img src={p8} alt="75%香濃可可蛋糕" />
            <div className="product-list-card-info">
              <Link to="/">75%香濃可可蛋糕</Link>
              <span>NT$770</span>
              <button className="btn product-list-card-info-btn">
                <span>加入購物車</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
