import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OpenActions } from "../../store/OpenSlice";

export default function ShopHeader() {
  const dispatch = useDispatch();

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
        <NavLink to="/">
          <ion-icon name="search-outline"></ion-icon>
        </NavLink>
        <NavLink to="/shop/cart">
          <ion-icon name="cart-outline"></ion-icon>
          <span>1</span>
        </NavLink>
      </div>
    </header>
  );
}
