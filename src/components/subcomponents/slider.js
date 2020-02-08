import React from "react";
import { Slide } from "react-slideshow-image";
import image1 from "../../pictures/image1.jpg";
import image2 from "../../pictures/image2.jpg";
import image3 from "../../pictures/image3.jpg";
import image4 from "../../pictures/image4.jpg";
import "./slider_styles.css";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";

const styles = { color: "white", fontWeight: "bolder" };

const slideImages = [
  {
    img: image1,
    description: "Power your home with solar energy",
    description2: "order and pay your bill online !"
  },
  {
    img: image2,
    description: "#green4climate",
    description2:
      "Own a complete clean energy 200W solar system at your home and enjoy the fun."
  },
  {
    img: image3,
    description: "#Vision2030 3D",
    description2: "Driven by Data and Digital"
  },
  {
    img: image4,
    description: "",
    description2:
      "For all your clean, green and smart energy solutions such as solar PV systems, solar water heating systems, cold rooms, solar fridges, lights (indoor and outdoor), etc. "
  }
];

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
      {slideImages.map(slide => {
        return (
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slide.img})`,
                opacity: 1 // 0.7
              }}
            >
              <span style={{ opacity: 1 }}>
                {/* <span style={{ opacity: 0.8 }}> */}
                <h1 style={styles}>
                  <GoogleFontNavItem
                    text={slide.description}
                    fontfamily={"pacifico"}
                  />
                </h1>
                <h3 style={styles}>
                  <GoogleFontNavItem
                    text={slide.description2}
                    fontfamily={"pacifico"}
                  />
                </h3>
              </span>
            </div>
          </div>
        );
      })}
    </Slide>
  );
}
export default Slider;
