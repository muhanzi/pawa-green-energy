import React, { Component } from "react";
import project from "./subcomponents/static";
import Slider from "./subcomponents/slider";
import { Container, Row, Col, Modal, Button, FormGroup } from "react-bootstrap";
import {
  MDBContainer,
  MDBDataTable,
  MDBBtn,
  MDBTable,
  MDBTableBody
} from "mdbreact";
import FloatingLabelInput from "react-floating-label-input";
import $ from "jquery";
import { Checkbox, withStyles, FormControlLabel } from "@material-ui/core";
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
import "./subcomponents/styles/myCalculator_styles.css";
import projectStyles from "./subcomponents/styles/Styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { energyCalculatorModal: false };
  }

  calculator_col_style = {
    borderRight: "1px solid #eee",
    borderBottom: "1px solid #eee",
    minHeight: 80,
    paddingTop: 25
  };

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

  energy_calculator = () => {
    // alert("energy calculator");
    this.setState({ energyCalculatorModal: true });
  };

  solar_calculator = () => {
    alert("solar calculator");
  };

  water_calculator = () => {
    alert("water pump calculator");
  };

  carbon_calculator = () => {
    alert("carbon footprint calculator");
  };

  HideEnergyCalculatorModal = () => {
    this.setState({ energyCalculatorModal: false });
  };

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
          <Row style={{ paddingBottom: 30, paddingTop: 10 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              <GoogleFontNavItem
                text={"My Calculator"}
                fontfamily={"labelle"}
              />
            </span>
          </Row>
          <Row
            style={{
              textAlign: "center",
              minHeight: 80,
              color: "white"
            }}
          >
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.energy_calculator}
            >
              <GoogleFontNavItem
                text={"energy calculator"}
                fontfamily={"pacifico"}
              />
            </Col>
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.solar_calculator}
            >
              <GoogleFontNavItem
                text={"solar calculator"}
                fontfamily={"pacifico"}
              />
            </Col>
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.water_calculator}
            >
              <GoogleFontNavItem
                text={"water pump calculator"}
                fontfamily={"pacifico"}
              />
            </Col>
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.carbon_calculator}
            >
              <GoogleFontNavItem
                text={"carbon footprint calculator"}
                fontfamily={"pacifico"}
              />
            </Col>
          </Row>
          <Row style={{ paddingTop: 20, paddingBottom: 30 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              <GoogleFontNavItem text={"Our Partners"} fontfamily={"labelle"} />
            </span>
          </Row>
          <Row></Row>
          <Row style={{ paddingBottom: 30 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              <GoogleFontNavItem
                text={"What's new about Solar Energy ?"}
                fontfamily={"labelle"}
              />
            </span>
          </Row>
          <Row></Row>
          <Row></Row>
        </Container>
        {/* popup window for energy calculator */}
        <Modal
          show={this.state.energyCalculatorModal}
          onHide={this.HideEnergyCalculatorModal}
          size="lg"
          centered
        >
          <form>
            <Modal.Header closeButton>
              <Modal.Title>
                <span
                  style={projectStyles().spanStyle2}
                  className="badge badge m-2"
                >
                  {"Energy calculator"}
                </span>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                <MDBTable>
                  <MDBTableBody>
                    <Row>
                      <Col>Device</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            label={"television"}
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col>Number</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            label={"1"}
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>PWatts</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            label={1000}
                            disabled
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col>perDay</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            label={"1 hour"}
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>PWatts</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            disabled
                            label={1000}
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col>perWeek</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            label={"1 day"}
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>PWatts</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            disabled
                            label={1000}
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col>perMonth</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="LoginUsernameId"
                            label={"1 week "}
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </MDBTableBody>
                </MDBTable>
              </p>
            </Modal.Body>

            <Modal.Footer>
              <MDBBtn
                className="btn-success"
                style={projectStyles().buttonStyle}
                onClick={this.HideEnergyCalculatorModal}
              >
                Close
              </MDBBtn>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Home;
