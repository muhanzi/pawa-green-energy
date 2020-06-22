import React, { useState, useEffect } from "react";
import project from "./static";
import { Container, Row, Col } from "react-bootstrap";
import GoogleFontNavItem from "./fonts/googleFontForNavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelopeSquare,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

function FooterList() {
  return (
    <div>
      <Container fluid>
        <Row
          style={{
            minHeight: 100,
            color: project().projectColor,
            backgroundColor: "white",
            paddingTop: 20,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 5,
          }}
        >
          <Col
            dm={3}
            style={{
              margin: "auto",
              marginBottom: 15,
              minWidth: 270,
            }} // minWidth: 270 --> location text will scale better on small devices // screen width < 360
          >
            <Row style={{ marginBottom: 15, fontSize: 20, fontWeight: "bold" }}>
              <GoogleFontNavItem text={"Contact us"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <span>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color={project().projectColor}
                />
                <span style={{ paddingLeft: 5 }}>
                  <GoogleFontNavItem
                    text={"PawaGreen Energy Ltd, Arua Uganda"}
                    fontfamily={"tangerine"}
                  />
                </span>
              </span>
            </Row>
            <Row>
              <span>
                <a
                  href="http://gmail.com"
                  style={{ color: project().projectColor }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    color={project().projectColor}
                  />
                  <span style={{ paddingLeft: 5 }}>
                    <GoogleFontNavItem
                      text={"info@pawagreenenergy.com"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </a>
              </span>
            </Row>
            <Row>
              <span>
                <FontAwesomeIcon
                  icon={faPhoneSquare}
                  color={project().projectColor}
                />
                <span style={{ paddingLeft: 5 }}>
                  <GoogleFontNavItem
                    text={"+256773218545"}
                    fontfamily={"tangerine"}
                  />
                </span>
              </span>
            </Row>
            <Row>
              <span>
                <FontAwesomeIcon
                  icon={faWhatsappSquare}
                  color={project().projectColor}
                />
                <span style={{ paddingLeft: 5 }}>
                  <GoogleFontNavItem
                    text={"+256773218545"}
                    fontfamily={"tangerine"}
                  />
                </span>
              </span>
            </Row>
          </Col>
          <Col
            dm={3}
            style={{
              margin: "auto",
              marginBottom: 15,
              minWidth: 250,
            }}
          >
            <Row style={{ marginBottom: 15, fontSize: 20, fontWeight: "bold" }}>
              <GoogleFontNavItem text={"Follow us"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <span>
                <a
                  href="https://www.linkedin.com/in/pawagreen-energy-30a68919b/"
                  style={{ color: project().projectColor }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color={project().projectColor}
                  />
                  <span style={{ paddingLeft: 5 }}>
                    <GoogleFontNavItem
                      text={"linked in"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </a>
              </span>
            </Row>
            <Row>
              <span>
                <a
                  href="https://web.facebook.com/PawaGreen-energy-334338817396790/"
                  style={{ color: project().projectColor }}
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    color={project().projectColor}
                  />
                  <span style={{ paddingLeft: 5 }}>
                    <GoogleFontNavItem
                      text={"facebook"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </a>
              </span>
            </Row>
            <Row>
              <span>
                <a
                  href="https://twitter.com/PawaGreenEnerg1"
                  style={{ color: project().projectColor }}
                >
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    color={project().projectColor}
                  />
                  <span style={{ paddingLeft: 5 }}>
                    <GoogleFontNavItem
                      text={"twitter"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </a>
              </span>
            </Row>
            <Row>
              <span>
                <a
                  href="https://www.instagram.com/pawagreen_energy/?hl=en"
                  style={{ color: project().projectColor }}
                >
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    color={project().projectColor}
                  />
                  <span style={{ paddingLeft: 5 }}>
                    <GoogleFontNavItem
                      text={"instagram"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </a>
              </span>
            </Row>
          </Col>
          <Col
            dm={3}
            style={{
              margin: "auto",
              marginBottom: 15,
              minWidth: 250,
            }}
          >
            <Row style={{ marginBottom: 15, fontSize: 20, fontWeight: "bold" }}>
              <GoogleFontNavItem text={"Services"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-SPV"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-SWS"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-SLS"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-CRS"} fontfamily={"tangerine"} />
            </Row>
          </Col>
          <Col
            dm={3}
            style={{
              margin: "auto",
              marginBottom: 15,
              minWidth: 250,
            }}
          >
            <Row style={{ marginBottom: 15, fontSize: 20, fontWeight: "bold" }}>
              <GoogleFontNavItem text={"Services"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-SAB"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-SPS"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-EPE"} fontfamily={"tangerine"} />
            </Row>
            <Row>
              <GoogleFontNavItem text={"PGE-ESC"} fontfamily={"tangerine"} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterList;
