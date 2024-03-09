import { animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-scroll ${isVisible ? "" : "hidden"}`}
    >
      <ion-icon name="chevron-up-outline"></ion-icon>
    </button>
  );
}
