import "./header.css";
import { Link } from "react-router-dom";
import img2 from "../../../public/ghaleb/newLogo.png";
import img3 from "../../../public/ghaleb/cart.png";
import { useContext } from "react";
import { changeNumber } from "../../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { number } = useContext(changeNumber);
  const loginNaviget = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={img2} alt="logo" className="logo" />
        </Link>
        <ul className="menu">
          <li>
            <Link to="/" className="menu_item">
              خانه
            </Link>
          </li>
          <li>
            <Link to="/products" className="menu_item">
              محصولات
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu_item">
              درباره ما
            </Link>
          </li>
          <li>
            <Link to="/Contactus" className="menu_item">
              تماس با ما
            </Link>
          </li>
        </ul>
        <div className="right_menu">
          <div className="box_login" onClick={() => loginNaviget("/login")}>
            <p>ورود | ثبت نام</p>
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/import.png"
              alt="import"
              className="login"
            />
          </div>
          <img src={img3} alt="sabad" className="sabad" />
          <p className="number_sabad">{number}</p>
        </div>

        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="35px"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>

        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
          <a className="home-link" href="/">
            Home
          </a>
          <a href="/products">Store</a>
          <a href="/about">About</a>
          <a href="/contactus">Contact</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
