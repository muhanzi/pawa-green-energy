import React, { Component } from "react";
import project from "./subcomponents/static";
import { Container } from "react-bootstrap";
import Slider from "./subcomponents/slider";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  slides = [
    {
      city: "Paris",
      country: "France",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg"
    },
    {
      city: "Singapore",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg"
    },
    {
      city: "Prague",
      country: "Czech Republic",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg"
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg"
    },
    {
      city: "Moscow",
      country: "Russia",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
    }
  ];
  render() {
    return (
      <div>
        <Container fluid={true} style={{ minHeight: 500 }}>
          <Slider slides={this.slides} />
        </Container>
      </div>
    );
  }
}

export default Home;
