import PageHeading from "../components/PageHeading";
import Categories from "../components/Categories"
import About from "../components/About";
import Headphones from "../components/Headphones";
const HeadphonePage = () => {
  return (
    <div>
      <PageHeading name={'Headphones'}/>
      <div className="container">
        <Headphones />
        <Categories />
        <About />
      </div>
    </div>
  );
};

export default HeadphonePage;
