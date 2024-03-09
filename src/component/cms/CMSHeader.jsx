import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OpenActions } from "../../store/OpenSlice";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../http";

export default function CMSHeader() {
  const dispatch = useDispatch();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  let dataArray = [];

  let quantity;

  if (data) {
    dataArray = Object.entries(data).map(([key, value]) => ({
      ...value,
      key: key,
    }));

    quantity = dataArray.filter((item) => item.isInCart === true).length;
  }

  function handleToggleMember() {
    dispatch(OpenActions.toggleMember());
  }

  return (
    <header className="menu-bar cms-bar">
      <ul className="menu-bar-list">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/cms/all"
            end
          >
            所有商品
          </NavLink>
        </li>
        <li>
          <NavLink to="/cms/popular">人氣商品</NavLink>
        </li>
        <li>
          <NavLink to="/cms/chocolate">巧克力</NavLink>
        </li>
        <li>
          <NavLink to="/cms/cake">美味蛋糕</NavLink>
        </li>
        <li>
          <NavLink to="/cms/cookie">經典餅乾</NavLink>
        </li>
      </ul>
    </header>
  );
}
