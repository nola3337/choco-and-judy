import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OpenActions } from "../store/OpenSlice";
import logoText from "../styles/img/logotext3.png";
import logo from "../styles/img/ribbon.webp";

export default function Header() {
  const dispatch = useDispatch();

  const toggleValue = useSelector((state) => state.open.menu);

  function handleOpenMenu() {
    dispatch(OpenActions.toggleMenu());
  }

  let menuContent;

  if (toggleValue) {
    menuContent = (
      <div className="nav">
        <button onClick={handleOpenMenu} className="btn nav-btn">
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <ul className="nav-list">
          <li>
            <NavHashLink onClick={handleOpenMenu} to="/">
              <ion-icon name="home-outline"></ion-icon>
              <span>首頁</span>
            </NavHashLink>
          </li>
          <li>
            <NavHashLink onClick={handleOpenMenu} to="/#about">
              <ion-icon name="information-circle-outline"></ion-icon>
              <span>關於我們</span>
            </NavHashLink>
          </li>
          <li>
            <NavHashLink onClick={handleOpenMenu} to="/#stores">
              <ion-icon name="storefront-outline"></ion-icon>
              <span>門市據點</span>
            </NavHashLink>
          </li>
          <li>
            <NavLink onClick={handleOpenMenu} to="/shop">
              <ion-icon name="bag-outline"></ion-icon>
              <span>線上商店</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleOpenMenu} to="/">
              <ion-icon name="chatbubbles-outline"></ion-icon>
              <span>聯絡我們</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  } else {
    menuContent = (
      <div>
        <button onClick={handleOpenMenu} className="btn">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    );
  }

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/">
          <img src={logoText} alt="text logo" />
          <img className="header-logo-img" src={logo} alt="logo" />
        </NavLink>
      </div>
      {menuContent}
    </header>
  );
}
