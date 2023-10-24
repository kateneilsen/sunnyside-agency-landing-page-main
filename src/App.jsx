import "./App.css";
import {useState} from "react";
import MobileNavbar from "./components/MobileNavbar.jsx";
import {Outlet} from "react-router-dom";

function App() {
    const [visibleNav, setVisibleNav] = useState(false);

  return (
    <>
        <MobileNavbar visible={visibleNav} setVisible={setVisibleNav} color={"#3EBFFF"}/>
        <main>
           <Outlet />
        </main>

    </>
  );
}

export default App;
