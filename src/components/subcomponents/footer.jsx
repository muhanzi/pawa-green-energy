import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import project from "./static";

const MyFooter = () => {
  return (
    <MDBFooter>
      <div
        style={{
          textAlign: "center",
          minHeight: 80,
          paddingTop: 20,
          color: "white",
          backgroundColor: project().projectColor,
        }}
      >
        <MDBContainer fluid>
          {project().companyName + " "}
          &#169;
          {" Copyright " + new Date().getFullYear() + ". All rights reserved."}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default MyFooter;
