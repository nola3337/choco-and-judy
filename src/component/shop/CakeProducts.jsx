import { Link } from "react-router-dom";

import p1 from "../../styles/img/products/cococake-p.webp";
import p2 from "../../styles/img/products/ichigo-p.webp";
import p5 from "../../styles/img/products/creamcupcake-p.webp";
import p7 from "../../styles/img/products/tilamisu-p.webp";
import p9 from "../../styles/img/products/cupcake-p.webp";

export default function CakeProducts() {
  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/cake">
          <span>美味蛋糕</span>
        </Link>
      </div>

      <div className="product-page">
        <h2>美味蛋糕</h2>
        <ul className="product-list">
          <li className="product-list-card">
            <img src={p1} alt="75%香濃可可蛋糕" />
            <div className="product-list-card-info">
              <Link to="/">75%香濃可可蛋糕</Link>
              <span>NT$770</span>
              <button className="btn product-list-card-info-btn">
                <span>加入購物車</span>
              </button>
            </div>
          </li>
          <li className="product-list-card">
            <img src={p2} alt="草莓蛋糕" />
            <div className="product-list-card-info">
              <Link to="/">草莓蛋糕</Link>
              <span>NT$1230</span>
              <button className="btn product-list-card-info-btn">
                <span>加入購物車</span>
              </button>
            </div>
          </li>
          <li className="product-list-card">
            <img src={p5} alt="75%香濃可可蛋糕" />
            <div className="product-list-card-info">
              <Link to="/">75%香濃可可蛋糕</Link>
              <span>NT$770</span>
              <button className="btn product-list-card-info-btn">
                <span>加入購物車</span>
              </button>
            </div>
          </li>
          <li className="product-list-card">
            <img src={p7} alt="75%香濃可可蛋糕" />
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
