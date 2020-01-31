import React, { Component } from "react";
import project from "./subcomponents/static";

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ height: 500 }}>
        Welcome to {project().companyName} Energy !
      </div>
    );
  }
}

export default Home;
