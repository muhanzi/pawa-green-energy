import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import project from "./static";
import { useSelector, useDispatch } from "react-redux";
import {
  navbar_selection_key1,
  navbar_selection_key2,
  navbar_selection_key3
} from "../../actions";

function Navigation() {
  const [activeNavLink, setActiveNavLink] = useState("");

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

  const getFontSize = key => {
    if (key_selected === key) {
      return 20;
    } else {
      return 15;
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: project().projectColor }}
    >
      <Navbar.Brand href="#home" style={{ color: "white" }}>
        {project().companyName}{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        {/* //or just put this empty nav and give it a margin right "push the next element (Nav) up to the end" <Nav className="mr-auto"></Nav> */}
        <Nav onSelect={handleSelection} activeKey={activeNavLink}>
          <Nav.Link href="/" eventKey="key1" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link
            href="/services"
            eventKey="key2"
            style={{
              color: "white"
              // fontSize: getFontSize("key2")
            }}
          >
            Services
          </Nav.Link>
          <Nav.Link
            href="/about"
            eventKey="key3"
            style={{
              color: "white"
              // fontSize: getFontSize("key3")
            }}
          >
            About us
          </Nav.Link>
          <Nav.Link href="#"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
