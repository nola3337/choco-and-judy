import { NavLink } from "react-router-dom";

export default function ShopSideBar() {
  return (
    <aside className="aside">
      <ul className="aside-list">
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
    </aside>
  );
}
