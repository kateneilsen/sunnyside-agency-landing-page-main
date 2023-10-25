
import MenuIcon from "../../images/icon-hamburger.svg";
import "./MobileNavbar.css";
import {Link} from "react-router-dom";
import Logo from "../Logo.jsx";
import { Menu } from '@headlessui/react'

// eslint-disable-next-line react/prop-types,no-unused-vars
const MobileNavbar = ({visible, setVisible, color, windowSize}) => {
  return (
        <nav style={{background: color}}>
          <a href={"/"}>
            <Logo fill={"white"} width={windowSize >= 768 ? "170" : "124"} height={windowSize >= 768 ? "33" : "24"} />
          </a>
            <Menu>
                <Menu.Button className={"menu-button"}>
                    <img src={MenuIcon} alt="menu" />
                </Menu.Button>
                <Menu.Items className={"menu-items"}>
                    <Menu.Item className={"menu-item"}>
                            <Link to="/about">
                               About
                            </Link>
                    </Menu.Item>
                    <Menu.Item className={"menu-item"}>
                        <Link to={"/services"}>Services</Link>
                    </Menu.Item>
                    <Menu.Item className={"menu-item"}>
                        <Link to={"/projects"}>Projects</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <button className={"contact"}>Contact</button>
                    </Menu.Item>
                </Menu.Items>
            </Menu>

          {/*{!visible ? "" : <NavLinks visible={visible} />}*/}

        </nav>
  );
};

export default MobileNavbar;
