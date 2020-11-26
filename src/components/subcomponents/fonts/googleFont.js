import React, { Component } from "react";
import GoogleFontLoader from "react-google-font-loader";

class GoogleFont extends Component {
  state = {
    roboto: "Roboto Mono, monospaced",
    roboto_sans_serif: "Roboto, sans-serif",
    labelle: "'La Belle Aurore', cursive",
    pacifico: "'Pacifico', cursive",
    alfa: "'Alfa Slab One', cursive",
    lobster: "'Lobster', cursive",
    sacramento: "'Sacramento', cursive",
    open: "'Open Sans', sans-serif",
    tangerine: "'Tangerine', serif"
  };

  check_font_family = () => {
    switch (this.props.fontfamily) {
      case "sacramento":
        return this.state.sacramento;
      case "open":
        return this.state.open;
      case "tangerine":
        return this.state.tangerine;
      case "pacifico":
        return this.state.pacifico;
      default:
        return this.state.roboto_sans_serif;
    }
  };
  render() {
    return (
      <div>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, "400i"]
            },
            {
              font: "Roboto Mono",
              weights: [400, 700]
            },
            {
              font: "'La Belle Aurore', cursive",
              weights: [400, 700]
            },
            {
              font: "'Sacramento', cursive",
              weights: [400, 700]
            },
            {
              font: "'Open Sans', sans-serif",
              weights: [400, 700]
            },
            {
              font: "'Pacifico', cursive",
              weights: [400, "400i"]
            },
            {
              font: "'Tangerine',serif",
              weights: [400, "400i"]
            }
          ]}
          subsets={["cyrillic-ext", "greek"]}
        />
        <div
          style={{
            fontFamily: this.check_font_family()
          }}
          //className="tangerine"  // works fine
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default GoogleFont;
