import logoText from "../styles/img/logotext3.png";
import logo from "../styles/img/ribbon.webp";

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
        <a href="#">關於我們</a>
        <a href="#">聯絡我們</a>
        <a href="#">門市據點</a>
        <a href="#">線上商店</a>
      </div>
      <div className="footer-copyright">
        <span>COPYRIGHT &#169; CHOCO &#38; JUDY ALL RIGHTS RESERVED</span>
        <span>此網站為個人練習作品，無任何商業用途</span>
      </div>
    </footer>
  );
}
