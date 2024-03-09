import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import fetchData from "../../http";

export default function Products() {
  const control = useAnimation();

  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  let dataArray = [];
  let firstThreeData = [];

  if (data) {
    dataArray = Object.entries(data).map(([key, value]) => ({
      ...value,
      key: key,
    }));

    firstThreeData = dataArray.slice(0, 3);
  }

  return (
    <section className="products">
      <div className="products-title">
        <h2>人氣商品</h2>
        <Link to="/shop">
          <button className="products-title-btn btn">
            <span>看更多</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </Link>
      </div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        animate={control}
        initial="hidden"
        transition={{ duration: 1 }}
        className="products-list"
      >
        {firstThreeData.map((item) => {
          const imgPath = `${process.env.PUBLIC_URL}/products/${item.img}`;

          return (
            <div key={item.key} className="products-list-card">
              <div className="products-list-card-img-box">
                <img src={imgPath} alt={item.name} />
              </div>
              <span>{item.name}</span>
              <p>{item.description}</p>
              <Link to={`/shop/${item.id}`}>
                <button className="btn btn-home-card">我要訂購</button>
              </Link>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
