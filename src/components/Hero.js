import mobileImage from "../assets/home/mobile/image-header.jpg";
import tabletImage from "../assets/home/tablet/image-header.jpg";
import desktopImage from "../assets/home/desktop/image-hero.jpg";
import {Link} from "react-router-dom"
const Hero = () => {
  const width = window.innerWidth;
  return (
    <div
      className="hero-wrapper"
      style={
        width >= 1200
          ? { backgroundImage: `url(${desktopImage})` }
          : width >= 768
          ? { backgroundImage: `url(${tabletImage})` }
          : { backgroundImage: `url(${mobileImage})` }
      }
    >
      <div className="hero-container">
      <div>
          <span>new product</span>
          <h1>XX99 Mark II Headphone</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to='/product/4' className="seeproductBtn">
            see product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
