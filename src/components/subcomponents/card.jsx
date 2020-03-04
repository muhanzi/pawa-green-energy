import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import Box from "@material-ui/core/Box";
import project from "./static";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";
import { Button } from "react-bootstrap";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkButtonAction = () => {
    switch (this.props.data.buttonAction) {
      case "oder_SPV":
        alert("sorry, this section is still under development");
        break;
      case "oder_SWS":
        alert("sorry, this section is still under development");
        break;
      case "oder_SLS":
        alert("sorry, this section is still under development");

        break;
      case "oder_CRS":
        alert("sorry, this section is still under development");

        break;
      case "oder_SAB":
        alert("sorry, this section is still under development");
        break;
      case "oder_SPS":
        alert("sorry, this section is still under development");
        break;
      case "oder_EPE":
        alert("sorry, this section is still under development");
        break;
      case "oder_ESC":
        alert("sorry, this section is still under development");
        break;
      default:
      // nothing
    }
  };

  render() {
    return (
      <div>
        <MDBCol>
          <MDBCard
            style={{
              width: "15rem",
              border: 0,
              paddingTop: 0,
              backgroundColor: project().home_component_background_color,
              margin: "0 auto"
            }}
          >
            <Box
              boxShadow={5}
              style={{ borderRadius: 10, backgroundColor: "#ffff" }}
            >
              <MDBCardImage
                className="img-fluid"
                src={this.props.data.image}
                waves
                alt="Loading..."
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  opacity: 0.9, // 1
                  height: 180,
                  width: "100%"
                }}
              />
              <MDBCardBody>
                <MDBCardTitle style={{ fontSize: 15 }}>
                  <GoogleFontNavItem
                    text={this.props.data.title}
                    fontfamily={"tangerine"}
                  />
                </MDBCardTitle>
                <MDBCardText
                  // small
                  style={{ fontSize: 12, height: 55 }}
                >
                  <GoogleFontNavItem
                    text={this.props.data.details}
                    fontfamily={"tangerine"}
                  />
                </MDBCardText>
                <Button
                  // hidden
                  variant="success"
                  style={{
                    backgroundColor: project().projectColor,
                    color: "white",
                    marginTop: 2
                  }}
                  onClick={this.checkButtonAction}
                >
                  <GoogleFontNavItem
                    text={this.props.data.buttonText}
                    fontfamily={"tangerine"}
                  />
                </Button>
              </MDBCardBody>
            </Box>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}

export default Card;
