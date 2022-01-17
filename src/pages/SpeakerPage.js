import Categories from "../components/Categories";
import About from "../components/About";
import PageHeading from "../components/PageHeading";
import Speakers from "../components/Speakers";
const SpeakerPage = () => {
  return (
    <div>
      <PageHeading name={"Speakers"} />
      <div className="container">
        <Speakers />
        <Categories />
        <About />
      </div>
    </div>
  );
};

export default SpeakerPage;
