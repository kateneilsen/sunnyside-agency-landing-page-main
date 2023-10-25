import Milk from "../images/mobile/image-gallery-milkbottles.jpg";
import Cone from "../images/mobile/image-gallery-cone.jpg";
import Orange from "../images/mobile/image-gallery-orange.jpg";
import SugarCubes from "../images/mobile/image-gallery-sugar-cubes.jpg";

import MilkDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import ConeDesktop from "../images/desktop/image-gallery-cone.jpg";
import OrangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import SugarCubesDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
        <picture>
            <source media={"(min-width: 768px"} srcSet={MilkDesktop} />
            <img src={Milk} alt="milk bottles" />
        </picture>
        <picture>
            <source media={"(min-width: 768px"} srcSet={OrangeDesktop} />
            <img src={Orange} alt="orange half" />
        </picture>
        <picture>
            <source media={"(min-width: 768px"} srcSet={ConeDesktop} />
            <img src={Cone} alt="cone" />
        </picture>
        <picture>
            <source media={"(min-width: 768px"} srcSet={SugarCubesDesktop} />
            <img src={SugarCubes} alt="sugar cubes" />
        </picture>
    </div>
  );
};

export default Gallery;
