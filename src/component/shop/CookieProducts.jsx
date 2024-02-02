import { Link } from "react-router-dom";

import p6 from "../../styles/img/products/chococookies-p.webp";

export default function CookieProducts() {
  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/cookie">
          <span>經典餅乾</span>
        </Link>
      </div>

      <div className="product-page">
        <h2>經典餅乾</h2>
        <ul className="product-list">
          <li className="product-list-card">
            <img src={p6} alt="巧克力餅乾" />
            <div className="product-list-card-info">
              <Link to="/">巧克力餅乾</Link>
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
