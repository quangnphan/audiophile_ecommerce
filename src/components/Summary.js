import { useGlobalContext } from "../context/context";
import SummaryItem from "./SummaryItem";
import { priceFormat } from "../utils/helper";
const Summary = () => {
  const { cart, total_price, shipping, vat, grand_total } = useGlobalContext();
  return (
    <section className="summary">
      <h6>summary</h6>
      <ul>
        {cart.map((cartItem) => {
          return <SummaryItem key={cartItem.id} {...cartItem} />;
        })}
      </ul>
      <div className="summary-price-info">
        <p className="total-field">
          total
          <span>{priceFormat(total_price)}</span>
        </p>
        <p className="total-field">
          shipping
          <span>{priceFormat(shipping)}</span>
        </p>
        <p className="total-field">
          vat(included)
          <span>{priceFormat(vat)}</span>
        </p>
        <p className="total-field">
          grand total
          <span className="grand-total">{priceFormat(grand_total)}</span>
        </p>
      </div>
      <button className="seeproductBtn">continue & pay</button>
    </section>
  );
};

export default Summary;
