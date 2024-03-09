import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../http";
import Loading from "../Loading";
import Error from "../Error.jsx";
import CMSItem from "./CMSItem.jsx";

export default function CMSPopularProducts() {
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
      .filter((item) => item.isHot === "yes")
      .map((item) => <CMSItem key={item.key} data={item} />);
  }

  return (
    <div>
      <div className="page-map">
        <Link to="/cms">
          <span>後台</span>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/cms/popular">
          <span>人氣商品</span>
        </Link>
      </div>
      <div className="product-page">
        <h2>人氣商品</h2>
        <ul className="product-list">{content}</ul>
      </div>
    </div>
  );
}
