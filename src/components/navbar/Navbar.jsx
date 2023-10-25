import {useEffect, useState} from "react";
import DesktopNavbar from "./DesktopNavbar.jsx";
import MobileNavbar from "./MobileNavbar.jsx";

// eslint-disable-next-line react/prop-types
const Navbar = ({color}) => {
    const [visibleNav, setVisibleNav] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    })

    function getWindowSize(){
        const {innerWidth} = window;
        return innerWidth;
    }
    return (
        <>
            {windowSize >= 768 ? <DesktopNavbar windowSize={windowSize} color={color} />
                : <MobileNavbar visible={visibleNav} setVisible={setVisibleNav} color={"#3EBFFF"} windowSize={windowSize}/>
            }
        </>
    );
};

export default Navbar;