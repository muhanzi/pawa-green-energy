import React, { Component } from "react";
import project from "./subcomponents/static";
import Slider from "./subcomponents/slider";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./subcomponents/card";
import image3 from "../pictures/image3.jpg";
import sws from "../pictures/sws.jpg";
import sls from "../pictures/sls.jpg";
import esc from "../pictures/esc.jpg";
import sps from "../pictures/sps.jpg";
import epe from "../pictures/epe.jpg";
import crs from "../pictures/crs.jpg";
import sab from "../pictures/sab.jpg";
import GoogleFontNavItem from "./subcomponents/fonts/googleFontForNavItems";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cards_data = [
    {
      title: "PGE-SPV",
      buttonText: "order",
      image: image3,
      buttonAction: "oder_SPV",
      details: "Solar Photovoltaic System (panels, batteries, inverters, remote controllers monitoring panels, etc.".substring(
        0,
        100
      )
    },
    {
      title: "PGE-SWS",
      buttonText: "order",
      image: sws,
      buttonAction: "oder_SWS",
      details: "Solar Water Heating System (flat plate, glass tube, & sovaltten)".substring(
        0,
        100
      )
    },
    {
      title: "PGE-SLS",
      buttonText: "order",
      image: sls,
      buttonAction: "oder_SLS",
      details: "Solar Lighting System (all in one street, compound and garden lights, indoor and outdoor lights)".substring(
        0,
        100
      )
    },
    {
      title: "PGE-CRS",
      buttonText: "order",
      image: crs,
      buttonAction: "oder_CRS",
      details: "Solar refrigeration & cold chain systems (solar fridges, freezer, cold rooms storage, systems)".substring(
        0,
        100
      )
    },
    {
      title: "PGE-SAB",
      buttonText: "order",
      image: sab,
      buttonAction: "oder_SAB",
      details: "Solar Agri-Business (solar water pumps, milling machines and dryers)".substring(
        0,
        100
      )
    },
    {
      title: "PGE-SPS",
      buttonText: "order",
      image: sps,
      buttonAction: "oder_SPS",
      details: "Security & Protection Systems (CCTV cameras, firefighting & alarm systems, lightning protection systems)".substring(
        0,
        100
      )
    },
    {
      title: "PGE-EPE",
      buttonText: "order",
      image: epe,
      buttonAction: "oder_EPE",
      details: "Electrical tools & personal protection equipment (meters, hand tools, power tools, & personal protection equipment".substring(
        0,
        100
      )
    },
    {
      title: "PGE-ESC",
      buttonText: "order",
      image: esc,
      buttonAction: "oder_ESC",
      details: "Services (design, installation & maintenance of solar systems, energy metering, energy consultancy services, energy efficiency, training, etc.)".substring(
        0,
        100
      )
    }
  ];

  render() {
    return (
      <div
        style={{
          minHeight: 800,
          backgroundColor: project().home_component_background_color
        }}
      >
        <Slider />
        <Container style={{ paddingBottom: 20, paddingTop: 10 }} fluid>
          <Row style={{ paddingBottom: 30 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              <GoogleFontNavItem
                text={"What we offer"}
                fontfamily={"labelle"}
              />
            </span>
          </Row>
          <Row>
            {this.cards_data.map(data => {
              return (
                <Col dm={3} style={{ paddingBottom: 20 }}>
                  <Card data={data} />
                </Col>
              );
            })}
          </Row>
          <Row style={{ paddingBottom: 30 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              <GoogleFontNavItem
                text={"Energy Calculator"}
                fontfamily={"labelle"}
              />
            </span>
          </Row>
          <Row style={{ margin: "auto", textAlign: "center" }}>
            <Col>energy calculator</Col>
            <Col>solar calculator</Col>
            <Col>carbon footprint calculator</Col>
            <Col>Green4climate</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
