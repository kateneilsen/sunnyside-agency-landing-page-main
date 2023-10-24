import Logo from "../images/logo.svg";
import Menu from "../images/icon-hamburger.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <button>
        <img src={Menu} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
