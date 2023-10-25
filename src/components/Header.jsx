
import Arrow from "../images/icon-arrow-down.svg";
import "./Header.css";
function Header() {
    return (
        <div className="header">
            <h1 className="copy">WE ARE CREATIVES</h1>
            <div className="arrow">
                <img src={Arrow} alt="arrow down" />
            </div>
        </div>
    );
}

export default Header;