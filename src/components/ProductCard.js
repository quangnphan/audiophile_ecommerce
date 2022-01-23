import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helper";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import { useGlobalContext } from "../context/context";

const ProductCard = ({ img, text, url }) => {
  const { toggleSideBar, isSideBarOpen } = useGlobalContext();
  return (
    <div className="card-wrapper">
      <img className="product-img" src={img} alt={text}></img>
      <div className="card">
        <h5>{text}</h5>
        <Link
          className="card-link"
          to={url}
          onClick={() => {
            if (isSideBarOpen) {
              toggleSideBar();
            }
            scrollToTop();
          }}
        >
          Shop <img src={arrow} alt="arrow"></img>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
