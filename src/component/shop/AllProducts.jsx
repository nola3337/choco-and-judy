import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import fetchData from "../../http";

export default function AllProducts() {
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

    // dataArray = Object.values(data);
  }

  const addIsInCart = async (productKey) => {
    const response = await fetch(
      `https://choco04-e8edd-default-rtdb.firebaseio.com/judy/${productKey}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isInCart: true }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add isInCart property");
    }

    return response.json();
  };

  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/products">
          <span>商品一覽</span>
        </Link>
      </div>

      <div className="product-page">
        <h2>商品一覽</h2>
        <ul className="product-list">
          {data &&
            dataArray &&
            dataArray.map((item) => {
              const imgPath = `${process.env.PUBLIC_URL}/products/${item.img}`;

              return (
                <li key={item.id} className="product-list-card">
                  <Link to={`/shop/${item.id}`}>
                    <img src={imgPath} alt={item.name} />
                  </Link>
                  <div className="product-list-card-info">
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                    <span>NT&#36;{item.price}</span>
                    <button
                      onClick={() => addIsInCart(item.key)}
                      className="btn product-list-card-info-btn"
                    >
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
