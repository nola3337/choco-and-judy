import HomeCarousel from "../component/home/Carousel";
import Products from "../component/home/Products";
import Stores from "../component/home/Stores";
import About from "../component/home/About";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <div className="bg-color">
        <Products />
        <Stores />
        <About />
      </div>
    </>
  );
}
