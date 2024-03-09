import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../http";
import Loading from "../Loading";
import Error from "../Error.jsx";
import ListItem from "./ListItem.jsx";

export default function CakeProducts() {
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
    content = dataArray
      .filter((item) => item.type === "美味蛋糕")
      .map((item) => <ListItem key={item.key} data={item} />);
  }

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
      </div>

      <div className="product-page">
        <h2>美味蛋糕</h2>
        <ul className="product-list">{content}</ul>
      </div>
    </div>
  );
}
