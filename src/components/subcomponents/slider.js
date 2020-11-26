import React from "react";
import { Slide } from "react-slideshow-image";
import image1 from "../../pictures/image1.jpg";
import image2 from "../../pictures/image2.jpg";
import image3 from "../../pictures/image3.jpg";
import image4 from "../../pictures/image4.jpg";
import "./styles/slider_styles.css";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";
import project from "./static";

const isSmallDevice = () => {
  if (!project().check_width) {
    return {
      span1: 40,
      span2: 25,
    };
  } else {
    return {
      span1: 30,
      span2: 18,
    };
  }
};

const styles = {
  color: "white",
  fontWeight: "bolder",
  fontSize: isSmallDevice().span1,
  // fontSize: "4vw"
}; // Viewport is the browser window size. 1vw = 1% of viewport width.
const styles_2 = {
  color: "white",
  fontWeight: "bolder",
  fontSize: isSmallDevice().span2,
  // fontSize: "3vw"
};

const slideImages = [
  {
    img: image1,
    description: "Power your home with solar energy",
    description2: "order and pay your bill online !",
  },
  {
    img: image2,
    description: "#green4climate",
    description2:
      "Own a complete clean energy 200W solar system at your home and enjoy the fun.",
  },
  {
    img: image3,
    description: "#Vision2030 3D",
    description2: "Driven by Data and Digital",
  },
  {
    img: image4,
    description: "",
    description2:
      "For all your clean, green and smart energy solutions such as solar PV systems, solar water heating systems, cold rooms, solar fridges, lights (indoor and outdoor), etc. ",
  },
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

function Slider() {
  return (
    <Slide {...properties}>
      {slideImages.map((slide) => {
        return (
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slide.img})`,
                opacity: 1, // 0.7
              }}
            >
              <span style={{ opacity: 1 }}>
                {/* <span style={{ opacity: 0.8 }}> */}
                <h1 style={styles}>
                  <GoogleFontNavItem
                    text={slide.description}
                    fontfamily={"tangerine"}
                  />
                </h1>
                <h3 style={styles_2}>
                  <GoogleFontNavItem
                    text={slide.description2}
                    fontfamily={"tangerine"}
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
