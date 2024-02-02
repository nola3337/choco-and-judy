import ShopHeader from "../component/shop/ShopHeader";
import ShopSideBar from "../component/shop/ShopSideBar";
import Member from "../component/shop/Member";

import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <Member />
      <ShopHeader />
      <div className="shop-body">
        <ShopSideBar />
        <Outlet />
      </div>
    </>
  );
}
