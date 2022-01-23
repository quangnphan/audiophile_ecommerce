import logo from "../assets/shared/desktop/logo.svg";
import { links } from "../utils/links";
import { Link } from "react-router-dom";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <img className="logo" src={logo} alt="logo"></img>
          <ul className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link className="link" to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="about">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="footer-bottom">
          <p>Copyright {year}. All rights reserved</p>
          <div className="social-links">
            <ul className="links">
              <li>
                <a href="#facebook">
                  <img src={facebook} alt="fb"></img>
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <img src={instagram} alt="ig"></img>
                </a>
              </li>
              <li>
                <a href="#twitter">
                  <img src={twitter} alt="tweet"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
