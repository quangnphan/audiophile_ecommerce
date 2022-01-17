import Categories from "../components/Categories";
import About from "../components/About";
import PageHeading from "../components/PageHeading";
import Earphones from "../components/Earphones";
const EarphonePage = () => {
  return (
    <div>
      <PageHeading name={"Earphones"} />
      <div className="container">
        <Earphones />
        <Categories />
        <About />
      </div>
    </div>
  );
};

export default EarphonePage;
