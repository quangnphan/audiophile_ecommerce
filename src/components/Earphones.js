import data from "../context/mockData/earphones";
import SingleProduct from "./SingleProduct";
const Earphones = () => {
  return (
    <section className="earphones">
      {data.map((item) => {
        return <SingleProduct key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Earphones;