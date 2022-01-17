const ProductFeatures = ({ features = "", includes = [] }) => {
  const text = features.split("\n\n");
  return (
    <section className="product-features">
      <div className="features">
        <h4>features</h4>
        <p>{text[0]}</p>
        <p>{text[1]}</p>
      </div>
      <div className="inbox">
        <h4>in the box</h4>
        <div>
          {includes.map(({ quantity, item }, index) => {
            return (
              <li key={index}>
                <span>{quantity}x</span>
                {item}
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductFeatures;
