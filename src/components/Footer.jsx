//import Logo from "../images/logo.svg";
import "./Footer.css";
import Logo from "./Logo.jsx";
import {Link} from "react-router-dom";
import {FaSquareFacebook, FaInstagram, FaTwitter, FaPinterest} from "react-icons/fa6"
import {IconContext} from "react-icons";

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
            <IconContext.Provider value={{ className: 'react-icons' }}>
            <button><FaSquareFacebook /></button>
            <button><FaInstagram /></button>
            <button><FaTwitter /></button>
            <button><FaPinterest /></button>
            </IconContext.Provider>
        </div>
    </footer>
  );
};

export default Footer;
