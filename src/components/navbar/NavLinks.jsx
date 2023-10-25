import "./NavLinks.css";
import {Link} from "react-router-dom";
import { Menu } from '@headlessui/react'

// eslint-disable-next-line react/prop-types,no-unused-vars
function NavLinks({visible}) {
    return (
        // <div className={`nav-links ${visible ? "show" : ""}`}>
        //     <ul>
        //         <li>
        //             <Link to={"/about"}>About</Link>
        //         </li>
        //         <li>
        //             <Link to={"/services"}>Services</Link>
        //         </li>
        //         <li>
        //             <Link to={"/projects"}>Projects</Link>
        //         </li>
        //         <li>
        //             <button className={"contact"}>Contact</button>
        //         </li>
        //     </ul>
        // </div>
        <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Account settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Documentation
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item disabled>
                    <span className="opacity-75">Invite a friend (coming soon!)</span>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
}

export default NavLinks;