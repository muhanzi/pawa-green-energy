import React, { useState, useContext } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import project from "./static";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { show_AddUserModal } from "../../actions";
import ContactBar from "./contactBar";
import styled from "styled-components";
import logo from "../../pictures/favicon.PNG";
import GoogleFont from "./fonts/googleFont";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";
import LoginAndSignUp from "../../firebase authentication/LoginAndSignUp";
import { AuthContext } from "../../firebase authentication/Auth";

function Navigation(props) {
  const dispatch = useDispatch();
  const handleSelection = (key) => {
    switch (key) {
      case "key1":
        break;
      case "key2":
        // if (currentUser) {
        //   return <Redirect to="/services" />;
        // } else {
        //   //dispatch(show_AddUserModal()); // do this action // tells the reducer which action to perform
        //   alert(currentUser);
        // }
        break;
      case "key3":
        break;
      case "key4":
        // if (currentUser) {
        //   return <Redirect to="/services" />;
        // } else {
        dispatch(show_AddUserModal()); // do this action // tells the reducer which action to perform
        //   alert(currentUser);
        // }
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
        <Navbar.Brand>
          <div>
            <Row>
              <Col style={logo_style}></Col>
              <Col style={{ paddingRight: 0, paddingLeft: 5, paddingTop: 10 }}>
                <Row>
                  <Col
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 20,
                      textShadow: "4px 4px 4px #aaa",
                    }}
                  >
                    <GoogleFont
                      text={project().companyName}
                      fontfamily="tangerine"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      fontSize: 13,
                      textShadow: "4px 4px 4px #aaa",
                      color: "black",
                    }}
                  >
                    <i>
                      <GoogleFont
                        text={"Think energy Think smart"}
                        fontfamily="pacifico"
                      />
                    </i>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            backgroundColor: project().projectColor,
          }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav onSelect={handleSelection}>
            <Nav.Link href="/" eventKey="key1">
              <HoverSpan>
                <GoogleFontNavItem
                  text={"Home"}
                  fontfamily={project().nav_item_font}
                />
              </HoverSpan>
            </Nav.Link>
            <Nav.Link href="/services" eventKey="key2">
              <HoverSpan>
                <GoogleFontNavItem
                  text={"Products & Services"}
                  fontfamily={project().nav_item_font}
                />
              </HoverSpan>
            </Nav.Link>
            <Nav.Link href="/about" eventKey="key3">
              <HoverSpan>
                <GoogleFontNavItem
                  text={"About"}
                  fontfamily={project().nav_item_font}
                />
              </HoverSpan>
            </Nav.Link>
            <Nav.Link eventKey="key4">
              <HoverSpan>
                <GoogleFontNavItem
                  text={"Login"}
                  fontfamily={project().nav_item_font}
                />
              </HoverSpan>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* ---popup window--- */}
        <LoginAndSignUp />
        {/* ---popup window--- */}
      </Navbar>
    </div>
  );
}

export default Navigation;
