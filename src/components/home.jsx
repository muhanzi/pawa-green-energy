import React, { Component } from "react";
import project from "./subcomponents/static";
import Slider from "./subcomponents/slider";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ minHeight: 1100 }}>
        <Slider />
      </div>
    );
  }
}

export default Home;
