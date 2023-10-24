//import Logo from "../images/logo.svg";
import "./Footer.css";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Twitter from "../images/icon-twitter.svg";
import Logo from "./Logo.jsx";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <a  href={"/home"}>
            <Logo fill={"#2C7566"} width={"170"} height={"33"}/>
        </a>
        <div className={"footer-nav-links"}>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/projects"}>Projects</Link>
        </div>
        <div className={"socials"}>
            <button>
                <img src={Facebook} alt={"facebook"} />
            </button>
            <button><img src={Instagram} alt={"instagram"} /></button>
            <button><img src={Twitter} alt={"twitter"} /></button>
            <button><img src={Pinterest} alt={"pinterest"} /></button>
        </div>
    </footer>
  );
};

export default Footer;
