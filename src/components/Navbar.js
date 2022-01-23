import { links } from "../utils/links";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import { useGlobalContext } from "../context/context";
import Cart from "./Cart";
import Burger from "./Burger";

const Navbar = () => {
  const { toggleCart, total_amount } = useGlobalContext();
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <Burger />
        <Link to={"/"}>
          <img src={logo} alt="logo"></img>
        </Link>
        <nav>
          <ul className="nav-list">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="cart-container">
          <img
            className="cart-img"
            src={cartIcon}
            alt="cart-img"
            onClick={toggleCart}
          ></img>
          <span className="cart-count">{total_amount}</span>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
