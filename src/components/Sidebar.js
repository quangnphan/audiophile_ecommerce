import { useGlobalContext } from "../context/context";
import { categories } from "../utils/links";
import ProductCard from "./ProductCard";

const Sidebar = () => {
  const { isSideBarOpen } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? "show-sidebar" : ""}>
      <ul>
        {categories.map((link) => {
          return <ProductCard key={link.id} {...link} />;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar
