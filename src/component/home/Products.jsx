import img1 from "../../styles/img/products/ichigo-p.webp";
import img2 from "../../styles/img/products/heart-p.webp";
import img3 from "../../styles/img/products/starchoco-p.webp";

export default function Products() {
  return (
    <section className="products">
      <div className="products-title">
        <h2>人氣商品</h2>
        <button className="products-title-btn btn">
          <span>看更多</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <div className="products-list">
        <div className="products-list-card">
          <div className="products-list-card-img-box">
            <img src={img1} alt="甜蜜草莓可可蛋糕" />
          </div>
          <span>甜蜜草莓可可蛋糕</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            minima ab nam, ea doloremque non laudantium!
          </p>
          <button className="products-list-card-btn btn">我要訂購</button>
        </div>
        <div className="products-list-card">
          <div className="products-list-card-img-box">
            <img src={img2} alt="心心相印濃密巧克力" />
          </div>
          <span>心心相印濃密巧克力</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            minima ab nam, ea doloremque non laudantium!
          </p>
          <button className="products-list-card-btn btn">我要訂購</button>
        </div>
        <div className="products-list-card">
          <div className="products-list-card-img-box">
            <img src={img3} alt="星耀臻果巧克力" />
          </div>
          <span>星耀臻果巧克力</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            minima ab nam, ea doloremque non laudantium!
          </p>
          <button className="products-list-card-btn btn">我要訂購</button>
        </div>
      </div>
    </section>
  );
}
