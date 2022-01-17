import AddToCartButtons from "./AddToCartButtons";
import { priceFormat } from "../utils/helper";

const ProductDetails = (data) => {
  const width = window.innerWidth;
  const {
    id,
    image: { mobile, tablet, desktop } = {},
    name,
    slug,
    new: new_label,
    description,
    price,
    cartImage,
  } = data;
  const cartInfo = {id,name,price,slug,cartImage}
  return (
    <section className="product-details">
      <div>
        <img className="product-img"
          src={width >= 1200 ? desktop : width >= 768 ? tablet : mobile}
          alt="img"
        ></img>
      </div>
      <div className="product-details-info">
        {new_label ? <span className="new-label">new product</span> : ""}
        <h4>{name}</h4>
        <p>{description}</p>
        <span>{priceFormat(price)}</span>
        <AddToCartButtons {...cartInfo}/>
      </div>
    </section>
  );
};

export default ProductDetails;
