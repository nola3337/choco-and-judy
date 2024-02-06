import logoText from "../styles/img/logotext3.png";
import logo from "../styles/img/ribbon.webp";

import { NavHashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logoText} alt="text logo" />
        <img className="footer-logo-main" src={logo} alt="logo" />
      </div>
      <div className="footer-social-link">
        <a href="#">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
      <div className="footer-link">
        <NavHashLink to="/#about">關於我們</NavHashLink>
        <NavHashLink to="/">聯絡我們</NavHashLink>
        <NavHashLink to="/#stores">門市據點</NavHashLink>
        <NavHashLink to="/shop">線上商店</NavHashLink>
        <NavHashLink to="/shop/cms">進入後台</NavHashLink>
      </div>
      <div className="footer-copyright">
        <span>COPYRIGHT &#169; CHOCO &#38; JUDY ALL RIGHTS RESERVED</span>
        <span>此網站為個人練習作品，無任何商業用途</span>
      </div>
    </footer>
  );
}
