import "./App.css";
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
function App() {


  return (
    <>
        <Navbar color={"#3EBFFF"} />
        <main>
           <Outlet />
        </main>
    </>
  );
}

export default App;
