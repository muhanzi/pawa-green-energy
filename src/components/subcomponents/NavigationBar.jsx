import React, { useState, useContext } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import project from "./static";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { useLocation } from "react-router-dom";
import {
  show_AddUserModal,
  navbar_selection_key1,
  navbar_selection_key2,
  navbar_selection_key3,
  user_signed_out,
  user_signed_in,
} from "../../actions";
import ContactBar from "./contactBar";
import styled from "styled-components";
import logo from "../../pictures/favicon.PNG";
import GoogleFont from "./fonts/googleFont";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";
import LoginAndSignUp from "../../firebase authentication/LoginAndSignUp";
import { AuthContext } from "../../firebase authentication/Auth";
import firebase from "../../firebase.js";
import { useEffect } from "react";

// history --> props object // props.history
function Navigation({ history }) {
  const dispatch = useDispatch();
  // current value in the store //
  const key_selected = useSelector((state) => state.navbar); // check in the /reducers/index.js
  //
  const { currentUser } = useContext(AuthContext);
  const [loginStatus, setLoginStatus] = useState("Login");

  const handleSelection = (key) => {
    switch (key) {
      case "key1":
        history.push("/");
        dispatch(navbar_selection_key1()); // do this action // tells the reducer which action to perform
        break;
      case "key2":
        dispatch(navbar_selection_key2());
        if (currentUser) {
          getUserDetails(firebase.auth().currentUser.uid); // just to get user details when user might have reloaded the window but didn't sign out
        } else {
          dispatch(show_AddUserModal()); // do this action // tells the reducer which action to perform
        }
        break;
      case "key3":
        history.push("/about");
        dispatch(navbar_selection_key3());
        break;
      case "key4":
        if (currentUser) {
          firebase.auth().signOut();
          dispatch(user_signed_out());
        } else {
          dispatch(show_AddUserModal()); // do this action // tells the reducer which action to perform
        }
        break;
      default:
    }
  };

  let location = useLocation();

  useEffect(() => {
    if (currentUser) {
      setLoginStatus("Logout");
    } else {
      setLoginStatus("Login");
    }
  });

  const currentRoute = (path) => {
    if (location.pathname === path) {
      return {
        color: "white",
        cursor: "pointer",
        backgroundColor: project().projectColor,
        fontWeight: "bold",
        borderRadius: "4px 4px",
        padding: "8px",
      };
    } else {
      return {};
    }
  };

  const getUserDetails = (id) => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .onSnapshot((snapshot) => {
        const user = snapshot.data();
        if (user) {
          dispatch(user_signed_in(user));
          dispatch(navbar_selection_key2());
          history.push("/services");
        }
      });
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
          <Nav onSelect={handleSelection} activeKey={key_selected}>
            <Nav.Link eventKey="key1">
              <HoverSpan style={currentRoute("/")}>
                <GoogleFontNavItem
                  text={"Home"}
                  fontfamily={project().nav_item_font}
                />
              </HoverSpan>
            </Nav.Link>
            <Nav.Link eventKey="key2">
              <HoverSpan style={currentRoute("/services")}>
                <GoogleFontNavItem
                  text={"Products & Services"}
                  fontfamily={project().nav_item_font}
                />
              </HoverSpan>
            </Nav.Link>
            <Nav.Link eventKey="key3">
              <HoverSpan style={currentRoute("/about")}>
                <GoogleFontNavItem
                  text={"About"}
                  fontfamily={project().nav_item_font}
                />
              </HoverSpan>
            </Nav.Link>
            <Nav.Link eventKey="key4">
              <HoverSpan>
                <GoogleFontNavItem
                  text={loginStatus}
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

export default withRouter(Navigation);
