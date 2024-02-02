import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
