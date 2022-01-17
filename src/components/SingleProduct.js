import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helper";

const SingleProduct = (data) => {
  const width = window.innerWidth;
  const {
    img: { mobile, tablet, desktop },
    new_label,
    name,
    text,
    id,
  } = data;
  return (
    <section className={`${width>=1200 && id % 2 === 0 ? 'reverse' : ''} product-flex`}>
      <div className="product-img">
        <img
          src={width >= 1200 ? desktop : width >= 768 ? tablet : mobile}
          alt={name}
        ></img>
      </div>
      <div className="product-info">
        {new_label ? <span className="new-label">new product</span> : ""}
        <h4>{name}</h4>
        <p>{text}</p>
        <Link className="seeproductBtn" to={`/product/${id}`} onClick={scrollToTop}>see product</Link>
      </div>
    </section>
  );
};

export default SingleProduct;
