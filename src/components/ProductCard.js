import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helper";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg"

const ProductCard = ({ img, text, url }) => {
  return (
    <div className="card-wrapper">
      <img className="product-img" src={img} alt={text}></img>
      <div className="card">
        <h5>{text}</h5>
        <Link className="card-link" to={url} onClick={scrollToTop}>Shop <img src={arrow} alt="arrow"></img></Link>
      </div>
    </div>
  );
};

export default ProductCard;
