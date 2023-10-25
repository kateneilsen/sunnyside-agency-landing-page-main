import "./NavLinks.css";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types,no-unused-vars
function NavLinks({visible}) {
    return (
        <div className={`nav-links ${visible ? "show" : ""}`}>
            <ul>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/services"}>Services</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                    <button className={"contact"}>Contact</button>
                </li>
            </ul>
        </div>

    );
}

export default NavLinks;