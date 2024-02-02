import img1 from "../../styles/img/store1.webp";
import img2 from "../../styles/img/store2.webp";
import img3 from "../../styles/img/store3.webp";
import img4 from "../../styles/img/store4.webp";

export default function Stores() {
  return (
    <section id="stores" className="stores">
      <div className="stores-title">
        <h2>門市據點</h2>
      </div>
      <ul className="stores-list">
        <li className="stores-list-card box-left">
          <img src={img1} alt="台北信義店" />
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>台北信義店</span>
              <span>110台北市信義區松壽路422號</span>
              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
        </li>
        <li className="stores-list-card box-right">
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>桃園萬壽店</span>
              <span>333桃園市龜山區萬壽路二段555號</span>
              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
          <img src={img2} alt="桃園萬壽店" />
        </li>
        <li className="stores-list-card box-left">
          <img src={img3} alt="台中勤美店" />
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>台中勤美店</span>
              <span>403台中市西區公益路800號</span>

              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
        </li>
        <li className="stores-list-card box-right">
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>彰化鹿港店</span>
              <span>505彰化縣鹿港鎮三民路500號</span>
              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
          <img src={img4} alt="彰化鹿港店" />
        </li>
      </ul>
    </section>
  );
}
