import data from "../context/mockData/headphones";
import SingleProduct from "./SingleProduct";
const Headphones = () => {
  return (
    <section className="headphones">
      {data.map((item) => {
        return <SingleProduct key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Headphones;
