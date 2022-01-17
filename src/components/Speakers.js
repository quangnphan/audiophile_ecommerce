import data from "../context/mockData/speakers";
import SingleProduct from "./SingleProduct";
const Speakers = () => {
  return (
    <section className="speakers">
      {data.map((item) => {
        return <SingleProduct key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Speakers;