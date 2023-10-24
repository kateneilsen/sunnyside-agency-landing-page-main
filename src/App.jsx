import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Info from "./components/Info";
import {useState} from "react";
import MobileNavbar from "./components/MobileNavbar.jsx";
import Arrow from "./images/icon-arrow-down.svg";

function App() {
    const [visible, setVisible] = useState(false);

  return (
    <>
        <div className="header">
            <MobileNavbar visible={visible} setVisible={setVisible}/>
            <h1 className="copy">WE ARE <br/>CREATIVES</h1>
            <div className="arrow">
                <img src={Arrow} alt="arrow down" />
            </div>
        </div>
      <Info />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
