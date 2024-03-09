import img1 from "../../styles/img/store1.webp";
import img2 from "../../styles/img/store2.webp";
import img3 from "../../styles/img/store3.webp";
import img4 from "../../styles/img/store4.webp";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Stores() {
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  const toLeftBoxVariant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 },
  };

  const toRightBoxVariant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    if (inView2) {
      control2.start("visible");
    }
    if (inView3) {
      control3.start("visible");
    }
    if (inView4) {
      control4.start("visible");
    }
  }, [
    control,
    control2,
    control3,
    control4,
    inView,
    inView2,
    inView3,
    inView4,
  ]);

  return (
    <section id="stores" className="stores">
      <div className="stores-title">
        <h2>門市據點</h2>
      </div>
      <ul className="stores-list">
        <motion.li
          ref={ref}
          variants={toLeftBoxVariant}
          animate={control}
          initial="hidden"
          transition={{ duration: 1 }}
          className="stores-list-card box-left"
        >
          <img src={img1} alt="台北信義店" />
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>台北信義店</span>
              <span>110台北市信義區松壽路422號</span>
              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
        </motion.li>
        <motion.li
          ref={ref2}
          variants={toRightBoxVariant}
          animate={control2}
          initial="hidden"
          transition={{ duration: 1 }}
          className="stores-list-card box-right"
        >
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>桃園萬壽店</span>
              <span>333桃園市龜山區萬壽路二段555號</span>
              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
          <img src={img2} alt="桃園萬壽店" />
        </motion.li>
        <motion.li
          ref={ref3}
          variants={toLeftBoxVariant}
          animate={control3}
          initial="hidden"
          transition={{ duration: 1 }}
          className="stores-list-card box-left"
        >
          <img src={img3} alt="台中勤美店" />
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>台中勤美店</span>
              <span>403台中市西區公益路800號</span>

              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
        </motion.li>
        <motion.li
          ref={ref4}
          variants={toRightBoxVariant}
          animate={control4}
          initial="hidden"
          transition={{ duration: 1 }}
          className="stores-list-card box-right"
        >
          <div className="stores-list-card-info">
            <div className="stores-list-card-info-box">
              <span>彰化鹿港店</span>
              <span>505彰化縣鹿港鎮三民路500號</span>
              <a href="tel:555-555-5555">tel:555-555-5555</a>
            </div>
          </div>
          <img src={img4} alt="彰化鹿港店" />
        </motion.li>
      </ul>
    </section>
  );
}
