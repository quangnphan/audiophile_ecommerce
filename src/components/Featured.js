import { Link } from "react-router-dom";
import earphoneMob from "../assets/home/mobile/image-earphones-yx1.jpg";
import earphoneTab from "../assets/home/tablet/image-earphones-yx1.jpg";
import earphoneDes from "../assets/home/desktop/image-earphones-yx1.jpg";
import zx9Mob from "../assets/home/mobile/image-speaker-zx9.png";
import zx9Tab from "../assets/home/tablet/image-speaker-zx9.png";
import zx9Des from "../assets/home/desktop/image-speaker-zx9.png";
import zx7Mob from "../assets/home/mobile/image-speaker-zx7.jpg";
import zx7Tab from "../assets/home/tablet/image-speaker-zx7.jpg";
import zx7Des from "../assets/home/desktop/image-speaker-zx7.jpg";
import pattern from "../assets/home/desktop/pattern-circles.svg";
import { scrollToTop } from "../utils/helper";

const Featured = () => {
  const width = window.innerWidth;
  return (
    <section>
      <div style={{ backgroundImage: `url(${pattern})` }} className="zx9 box">
        <img
          src={`${width >= 1200 ? zx9Des : width >= 768 ? zx9Tab : zx9Mob}`}
          alt="speakerphone"
        ></img>
        <div>
          <h3>zx9 speaker</h3>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link className="featuredBtn zx9Btn" to="/product/6" onClick={scrollToTop}>
            see product
          </Link>
        </div>
      </div>
      <div
        className="zx7 box"
        style={
          width >= 1200
            ? { backgroundImage: `url(${zx7Des})` }
            : width >= 768
            ? { backgroundImage: `url(${zx7Tab})` }
            : { backgroundImage: `url(${zx7Mob})` }
        }
      >
        <h4>zx7 speaker</h4>
        <Link className="featuredBtn" to="/product/5" onClick={scrollToTop}>
          see product
        </Link>
      </div>
      <div className="yx1-flex">
        <div className="yx1-img">
          <img
            src={`${
              width >= 1200
                ? earphoneDes
                : width >= 768
                ? earphoneTab
                : earphoneMob
            }`}
            alt="earphone"
          ></img>
        </div>
        <div className="yx1">
          <h4>yx1 earphones</h4>
          <Link className="featuredBtn" to="/product/1" onClick={scrollToTop}>
            see product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
