import Logo from "../Logo.jsx";
import {Link} from "react-router-dom";
import "./DesktopNavbar.css"

// eslint-disable-next-line react/prop-types
function DesktopNavbar({color, windowSize}) {
    return (
        <nav style={{background: color}}>
            <Link to={"/home"}>
                <Logo fill={"white"} width={windowSize >= 768 ? "170" : "124"} height={windowSize >= 768 ? "33" : "24"} />
            </Link>
            <div className={"desktop-nav-links"}>
                <Link to={"/about"}>About</Link>
                <Link to={"/services"}>Services</Link>
                <Link to={"/projects"}>Projects</Link>
                <button className={"desktop-contact"}>
                        CONTACT
                   </button>
            </div>



        </nav>
    );
}

export default DesktopNavbar;