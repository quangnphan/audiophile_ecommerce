import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { priceFormat } from "../utils/helper";
import CartAmountToggle from "./CartAmountToggle";
const Cart = () => {
  const { isCartOpen, cart, clearCart, toggleCart,total_price } = useGlobalContext();
  return (
    <div className={`${isCartOpen ? "show" : "hide"} cart-wrapper`}>
      <div className="cart-header">
        <h6>cart ({cart.length})</h6>
        <button onClick={clearCart} className="clearBtn">
          Remove all
        </button>
      </div>
      {cart.length !== 0 && (
        <ul>
          {cart.map((cartItem) => {
            const { id, slug, cartImage, price, amount } = cartItem;
            return (
              <li className="cart-list" key={id}>
                <img src={cartImage} alt="cart item"></img>
                <div className="list-info">
                  <h6 className="slug">{slug}</h6>
                  <span className="price">{priceFormat(price)}</span>
                </div>
                <CartAmountToggle value={amount} id={id} />
              </li>
            );
          })}
        </ul>
      )}
      {!cart.length && <p className="cart-message">Your cart is empty</p>}
      <div className="total-price">
        <span className="total-span">total</span>
        <span className="cart-price">{priceFormat(total_price)}</span>
      </div>
      <Link
        to={`${cart.length ? "/checkout" : "/"}`}
        className="cartBtn"
        onClick={toggleCart}
      >
        {cart.length > 0 ? "Checkout" : "Fill it"}
      </Link>
    </div>
  );
};

export default Cart;
