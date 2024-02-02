import { Link } from "react-router-dom";

import p1 from "../../styles/img/products/cococake-p.webp";

export default function Cart() {
  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/cart">
          <span>我的購物車</span>
        </Link>
      </div>
      <div className="cart">
        <h2>我的購物車</h2>
        <ul className="cart-list">
          <li className="cart-list-tital cart-list-grid">
            <span>商品明細</span>
            <span>數量</span>
            <span>小計</span>
            <span>變更</span>
          </li>
          <li className="cart-list-item cart-list-grid">
            <img src={p1} alt="75%香濃可可蛋糕" />
            <div className="cart-list-item-text">
              <span className="cart-list-item-text-name">75%香濃可可蛋糕</span>
              <span className="cart-list-item-text-price">NT&#36;770</span>
            </div>
            <div className="cart-list-item-quantity">
              <div className="cart-list-item-quantity-box">
                <button className="btn">
                  <ion-icon name="remove-outline"></ion-icon>
                </button>
                <span>1</span>
                <button className="btn">
                  <ion-icon name="add-outline"></ion-icon>
                </button>
              </div>
            </div>
            <div className="cart-list-item-quantity">
              <span>NT&#36;770</span>
            </div>
            <div className="cart-list-item-remove">
              <button className="btn">
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          </li>
        </ul>
        <div className="cart-total">
          <span>總計 NT&#36;770</span>
        </div>
      </div>
    </div>
  );
}
