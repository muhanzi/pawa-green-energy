import React, { useState } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import project from "./static";
import { useSelector, useDispatch } from "react-redux";
import {
  navbar_selection_key1,
  navbar_selection_key2,
  navbar_selection_key3
} from "../../actions";
import ContactBar from "./contactBar";
import styled from "styled-components";
import logo from "../../pictures/logo_icon.PNG";
import MyGoogleFont from "./myGoogleFont";

function Navigation() {
  const [activeNavLink, setActiveNavLink] = useState("");
  const [nav_Items_style, setNav_Items_style] = useState({
    color: project().projectColor,
    fontWeight: "bold"
  });

  // current value in the store //
  const key_selected = useSelector(state => state.navbar); // check in the /reducers/index.js
  //
  const dispatch = useDispatch(); // but we can also use "useDispatch()" directly

  const handleSelection = key => {
    switch (key) {
      case "key1":
        dispatch(navbar_selection_key1()); // do this action // tells the reducer which action to perform
        setActiveNavLink("key1"); // i comment this because once you click on the Nav.Link this component will be reloaded // which turns 'activeNavLink' to "" again
        break;
      case "key2":
        dispatch(navbar_selection_key2());
        setActiveNavLink("key2");
        break;
      case "key3":
        dispatch(navbar_selection_key3());
        setActiveNavLink("key3");
        break;
      default:
    }
  };

  const HoverSpan = styled.span`
    color: #1d8348;
    font-weight: bold;
    padding: 8px;
    :hover {
      color: white;
      cursor: pointer;
      background-color: #1d8348;
      font-weight: bold;
      border-radius: 4px 4px;
      padding: 8px;
    }
  `; // styled-components library helps us to style html elements

  const logo_style = {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 70,
    width: 70,
    marginRight: 10
  };

  return (
    <div>
      <ContactBar />
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "white" }}
      >
        <Navbar.Brand style={logo_style}></Navbar.Brand>
        {/* 
        // this also works well // but <Row> component is more professional
        <span>
          <span
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            <MyGoogleFont text={project().companyName} />
          </span>
          <span>
            <i>Think energy Think smart</i>
          </span>
        </span> */}
        <div>
          <Row>
            <Col
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
                textShadow: "4px 4px 4px #aaa"
              }}
            >
              <MyGoogleFont
                text={project().companyName}
                fontfamily="tangerine"
              />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                fontSize: 13,
                textShadow: "4px 4px 4px #aaa"
              }}
            >
              <i>
                <MyGoogleFont
                  text={"Think energy Think smart"}
                  fontfamily="pacifico"
                />
              </i>
            </Col>
          </Row>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: project().projectColor }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav onSelect={handleSelection} activeKey={activeNavLink}>
            <Nav.Link href="/" eventKey="key1">
              <HoverSpan>Home</HoverSpan>
            </Nav.Link>
            <Nav.Link href="/services" eventKey="key2">
              <HoverSpan>Products & Services</HoverSpan>
            </Nav.Link>
            <Nav.Link href="/about" eventKey="key3">
              <HoverSpan>About</HoverSpan>
            </Nav.Link>
            <Nav.Link href="/login" eventKey="key4">
              <HoverSpan>Login</HoverSpan>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
