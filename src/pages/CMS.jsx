import CMSHeader from "../component/cms/CMSHeader";
import CMSSideBar from "../component/cms/CMSSideBar";

import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CMS() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <CMSHeader />
      <div className="shop-body cms-body">
        <CMSSideBar />
        <Outlet />
      </div>
    </>
  );
}
