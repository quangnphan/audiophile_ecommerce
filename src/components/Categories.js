import { categories } from "../utils/links";
import ProductCard from "./ProductCard";

const Categories = () => {
  return (
    <section>
      <div className="products-wrapper">
        {categories.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
