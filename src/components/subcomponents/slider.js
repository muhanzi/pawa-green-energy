import React from "react";
import { Slide } from "react-slideshow-image";
import image1 from "../../pictures/image1.jpg";
import image2 from "../../pictures/image2.jpg";
import image3 from "../../pictures/image3.jpg";
import image4 from "../../pictures/image4.jpg";
import image5 from "../../pictures/image5.jpg";
import image6 from "../../pictures/image6.jpg";
import "./slider_styles.css";

// const slideImages = [image1, image2, image3, image4, image5, image6];
const slideImages = [image1, image2, image3];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

function Slider() {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div>
      {/* <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
          <span>Slide 4</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[4]})` }}>
          <span>Slide 5</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[5]})` }}>
          <span>Slide 6</span>
        </div>
      </div> */}
    </Slide>
  );
}
export default Slider;
