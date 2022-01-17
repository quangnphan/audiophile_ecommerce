import { priceFormat } from "../utils/helper";
const SummaryItem = ({ cartImage: image, slug: title, price, amount }) => {
  return (
    <li className="summary-list">
      <img src={image} alt="cart img"></img>
      <div className="summary-info">
        <p className="summary-title">{title}</p>
        <span className="summary-amount">x{amount}</span>
        <p className="summary-price">{priceFormat(price)}</p>
      </div>
    </li>
  );
};

export default SummaryItem;
