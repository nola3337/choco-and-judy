import ShopHeader from "../component/shop/ShopHeader";
import ShopSideBar from "../component/shop/ShopSideBar";
import Member from "../component/shop/Member";

import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Shop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
