import Header from "../component/Header";
import Footer from "../component/Footer";
import BackToTop from "../component/BackToTop";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <BackToTop />
      <Outlet />
      <Footer />
    </>
  );
}
