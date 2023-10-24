//import Logo from "../images/logo.svg";
import "./Footer.css";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Twitter from "../images/icon-twitter.svg";
import Logo from "./Logo.jsx";

const Footer = () => {
  return (
    <footer>
        <Logo fill={"#2C7566"} width={"170"} height={"33"}/>
        <div className={"nav-links"}>
            <a href={"/"}>About</a>
            <a href={"/"}>Services</a>
            <a href={"/"}>Projects</a>
        </div>
        <div className={"socials"}>
            <a href={"/"}>
                <img src={Facebook} alt={"facebook"} />
            </a>
            <a href={"/"}><img src={Instagram} alt={"instagram"} /></a>
            <a href={"/"}><img src={Twitter} alt={"twitter"} /></a>
            <a href={"/"}><img src={Pinterest} alt={"pinterest"} /></a>
        </div>
    </footer>
  );
};

export default Footer;
