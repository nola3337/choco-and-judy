import { NavLink } from "react-router-dom";

export default function CMSSideBar() {
  return (
    <aside className="aside cms-aside">
      <ul className="aside-list">
        <li>
          <NavLink to="/cms">後台首頁</NavLink>
        </li>
        <li>
          <NavLink to="/cms/add-product">新增商品</NavLink>
        </li>
      </ul>
    </aside>
  );
}
