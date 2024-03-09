import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import fetchData from "../../http";
import { addToCart } from "../../http";
import Loading from "../Loading";
import Error from "../Error.jsx";
import { useRef, useState } from "react";

export default function Search() {
  const queryClient = useQueryClient();
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", { search: searchTerm }],
    queryFn: () => fetchData(searchTerm),
  });

  function handleSubmit(e) {
    e.preventDefault();

    setSearchTerm(searchElement.current.value);
  }

  let dataArray = [];

  if (data) {
    dataArray = Object.entries(data).map(([key, value]) => ({
      ...value,
      key: key,
    }));

    // dataArray = Object.values(data);
  }

  const { mutate } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  let content;

  if (isPending) {
    content = <Loading />;
  }

  if (isError) {
    content = <Error error={error} />;

    console.error("Error:", error);

    if (error.response) {
      console.error("Response:", error.response);
    }
  }

  if (data) {
    content = dataArray.map((item) => {
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
              onClick={() => mutate(item.key)}
              className="btn product-list-card-info-btn"
            >
              <span>加入購物車</span>
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/search">
          <span>搜尋商品</span>
        </Link>
      </div>

      <div className="product-page">
        <h2>搜尋商品</h2>
        <div className="search">
          <input ref={searchElement} type="search" name="search" />
          <button onClick={handleSubmit} className="btn">
            <span>搜尋</span>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

        <ul className="product-list">{content}</ul>
      </div>
    </div>
  );
}
