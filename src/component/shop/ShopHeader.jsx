import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OpenActions } from "../../store/OpenSlice";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../http";

export default function ShopHeader() {
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
    <header className="menu-bar">
      <ul className="menu-bar-list">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/shop"
            end
          >
            商店首頁
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/products">商品一覽</NavLink>
        </li>
        <li>
          <NavLink to="/shop/chocolate">巧克力</NavLink>
        </li>
        <li>
          <NavLink to="/shop/cake">美味蛋糕</NavLink>
        </li>
        <li>
          <NavLink to="/shop/cookie">經典餅乾</NavLink>
        </li>
      </ul>
      <div className="menu-bar-icon">
        <NavLink onClick={handleToggleMember}>
          <ion-icon name="person-circle-outline"></ion-icon>
        </NavLink>
        <NavLink to="/shop/cart">
          <ion-icon name="cart-outline"></ion-icon>
          {quantity >= 1 && <span>{quantity}</span>}
        </NavLink>
      </div>
    </header>
  );
}
