import Hero from "../components/Hero";
import Categories from "../components/Categories"
import Featured from "../components/Featured";
import About from "../components/About";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Categories />
        <Featured />
        <About />
      </div>
    </div>
  );
};

export default HomePage;
