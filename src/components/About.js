import imageMob from "../assets/shared/mobile/image-best-gear.jpg";
import imageTab from "../assets/shared/tablet/image-best-gear.jpg";
import imageDes from "../assets/shared/desktop/image-best-gear.jpg";

const About = () => {
  const width = window.innerWidth;
  return (
    <section className="about">
      <div className="content">
        <h3>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="about-img">
        <img
          src={`${
            width >= 1200 ? imageDes : width >= 768 ? imageTab : imageMob
          }`}
          alt="about"
        ></img>
      </div>
    </section>
  );
};

export default About;
