
import Menu from "../../images/icon-hamburger.svg";
import "./MobileNavbar.css";
import NavLinks from "./NavLinks.jsx";
import Logo from "../Logo.jsx";

// eslint-disable-next-line react/prop-types
const MobileNavbar = ({visible, setVisible, color, windowSize}) => {
  return (
        <nav style={{background: color}}>
          <a href={"/"}>
            <Logo fill={"white"} width={windowSize >= 768 ? "170" : "124"} height={windowSize >= 768 ? "33" : "24"} />
          </a>
          <button onClick={() => setVisible(!visible)}>
            <img src={Menu} alt="menu" />
          </button>

          {!visible ? "" : <NavLinks visible={visible} />}

        </nav>
  );
};

export default MobileNavbar;
