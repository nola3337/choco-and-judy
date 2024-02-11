import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../http";

export default function CookieProducts() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  let dataArray = [];

  if (data) {
    dataArray = Object.entries(data).map(([key, value]) => ({
      ...value,
      key: key,
    }));
  }

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
          {data &&
            dataArray &&
            dataArray
              .filter((item) => item.type === "經典餅乾")
              .map((item) => {
                const imgPath = `${process.env.PUBLIC_URL}/products/${item.img}`;

                return (
                  <li key={item.id} className="product-list-card">
                    <Link to={`/shop/${item.id}`}>
                      <img src={imgPath} alt={item.name} />
                    </Link>
                    <div className="product-list-card-info">
                      <Link to={`/shop/${item.id}`}>{item.name}</Link>
                      <span>NT&#36;{item.price}</span>
                      <button className="btn product-list-card-info-btn">
                        <span>加入購物車</span>
                      </button>
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
