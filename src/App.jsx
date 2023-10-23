import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />
      <Info />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
