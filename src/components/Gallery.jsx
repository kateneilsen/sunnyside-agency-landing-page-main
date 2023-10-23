import React from "react";
import Milk from "../images/mobile/image-gallery-milkbottles.jpg";
import Cone from "../images/mobile/image-gallery-cone.jpg";
import Orange from "../images/mobile/image-gallery-orange.jpg";
import SugarCubes from "../images/mobile/image-gallery-sugar-cubes.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <img src={Milk} alt="milk bottles" />
      <img src={Orange} alt="orange half" />
      <img src={Cone} alt="cone" />
      <img src={SugarCubes} alt="sugar cubes" />
    </div>
  );
};

export default Gallery;
