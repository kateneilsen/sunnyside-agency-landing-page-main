import "./App.css";
import {useState,  useEffect} from "react";
import MobileNavbar from "./components/MobileNavbar.jsx";
import {Outlet} from "react-router-dom";
import DesktopNavbar from "./components/DesktopNavbar.jsx";

function App() {
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
        {windowSize >= 768 ? <DesktopNavbar windowSize={windowSize} color={"#3EBFFF"} />
            : <MobileNavbar visible={visibleNav} setVisible={setVisibleNav} color={"#3EBFFF"} windowSize={windowSize}/>
        }
        <main>
           <Outlet />
        </main>

    </>
  );
}

export default App;
