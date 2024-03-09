import img from "../../styles/img/ribbon.webp";
import imgText from "../../styles/img/logotext4.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function About() {
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();
  const control6 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();

  const boxVariant = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
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
    if (inView5) {
      control5.start("visible");
    }
    if (inView6) {
      control6.start("visible");
    }
  }, [
    control,
    control2,
    control3,
    control4,
    control5,
    control6,
    inView,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
  ]);

  return (
    <section id="about" className="about">
      <div className="about-title">
        <h2>關於我們</h2>
      </div>
      <div className="about-box">
        <motion.div
          ref={ref}
          variants={boxVariant}
          animate={control}
          initial="hidden"
          transition={{ duration: 1 }}
          className="about-box-img"
        >
          <img src={img} alt="ribbon logo" />
          <img src={imgText} alt="text logo" />
        </motion.div>

        <div className="about-box-text">
          <motion.p
            ref={ref2}
            variants={boxVariant}
            animate={control2}
            initial="hidden"
            transition={{ duration: 1 }}
          >
            在一個充滿巧克力香氣的小鎮中，有著一位神奇的巧克力精靈，他的名字叫
            CHOCO。
          </motion.p>
          <motion.p
            ref={ref3}
            variants={boxVariant}
            animate={control3}
            initial="hidden"
            transition={{ duration: 1 }}
          >
            CHOCO
            生活在一座由巧克力和糖果組成的仙境，他的使命是為這個小鎮的居民帶來最美味的巧克力。
          </motion.p>
          <motion.p
            ref={ref6}
            variants={boxVariant}
            animate={control6}
            initial="hidden"
            transition={{ duration: 1 }}
          >
            CHOCO
            是一位擁有魔法能力的巧克力精靈，他可以用巧克力的魔法讓人們感到幸福和快樂。他的巧克力製作技藝非常高超，能夠創造出各種口感豐富、風味獨特的巧克力，每一塊都蘊含著他對美味的堅持和對幸福的祝願。
          </motion.p>
          <motion.p
            ref={ref4}
            variants={boxVariant}
            animate={control4}
            initial="hidden"
            transition={{ duration: 1 }}
          >
            在這個小鎮裡，有一位小女孩名叫 JUDY，她對 CHOCO
            的巧克力情有獨鍾。每當 JUDY 走進 CHOCO 的巧克力店，她都會被 CHOCO
            手工製作的美味巧克力所吸引，而 CHOCO
            也對這位小女孩的熱愛巧克力的心情深感理解。
          </motion.p>
          <motion.p
            ref={ref5}
            variants={boxVariant}
            animate={control5}
            initial="hidden"
            transition={{ duration: 1 }}
          >
            一天，JUDY 意外發現了 CHOCO 的存在，從此之後，她與 CHOCO
            成為了最好的朋友。CHOCO 願意與 JUDY
            分享巧克力的秘密，並且教她巧克力的魔法。兩人攜手合作，將更多美味的巧克力帶給小鎮的居民，讓每個人都能感受到
            CHOCO 的巧克力所帶來的幸福。
          </motion.p>
        </div>
      </div>
    </section>
  );
}
