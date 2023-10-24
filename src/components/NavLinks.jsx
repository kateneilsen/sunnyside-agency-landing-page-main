import "./NavLinks.css";

// eslint-disable-next-line react/prop-types,no-unused-vars
function NavLinks({visible, setVisible}) {
    return (
        <div className={`nav-links ${visible ? "show" : ""}`}>
            <ul className={!visible ? "" : "show"}>
                <li>
                    <a href={"/"}>About</a>
                </li>
                <li>
                    <a href={"/"}>Services</a>
                </li>
                <li>
                    <a href={"/"}>Projects</a>
                </li>
                <li>
                    <button className={"contact"}>Contact</button>
                </li>
            </ul>
        </div>

    );
}

export default NavLinks;