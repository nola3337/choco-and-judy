import img from "../../styles/img/ribbon.webp";
import imgText from "../../styles/img/logotext4.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h2>關於我們</h2>
      </div>
      <div className="about-box">
        <div className="about-box-img">
          <img src={img} alt="ribbon logo" />
          <img src={imgText} alt="text logo" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi
          qui beatae rerum veniam tempore dolor consequuntur? Animi sequi minima
          praesentium, reiciendis dolore ex delectus, assumenda ullam ad enim
          ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          quasi qui beatae rerum veniam tempore dolor consequuntur? Animi sequi
          minima praesentium, reiciendis dolore ex delectus, assumenda ullam ad
          enim ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime quasi qui beatae rerum veniam tempore dolor consequuntur? Animi
          sequi minima praesentium, reiciendis dolore ex delectus, assumenda
          ullam ad enim ipsa!
        </p>
      </div>
    </section>
  );
}
