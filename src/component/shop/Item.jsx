import p1 from "../../styles/img/products/cococake-p.webp";

import { Link } from "react-router-dom";

export default function Item() {
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
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <span>75%香濃可可蛋糕</span>
      </div>
      <div className="item">
        <div className="item-img">
          <img src={p1} alt="75%香濃可可蛋糕" />
        </div>
        <div className="item-text">
          <h2>75%香濃可可蛋糕</h2>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, accusantium nob! Culpa deleniti iure nihil soluta,
            itaque cupiditate perspiciatis maxime dolor impedit nam ma minima?
            Facilis voluptatum explicabo alias nemo?
          </p>
        </div>
        <div className="item-buy">
          <span className="item-buy-text">優惠價</span>
          <span className="item-buy-price">NT$1230</span>
          <button className="btn product-list-card-info-btn item-buy-btn">
            <span>加入購物車</span>
          </button>
        </div>
      </div>
    </div>
  );
}
