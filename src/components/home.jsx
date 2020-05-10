import React, { Component } from "react";
import project from "./subcomponents/static";
import Slider from "./subcomponents/slider";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  FormGroup,
  Image,
} from "react-bootstrap";
import {
  MDBContainer,
  MDBDataTable,
  MDBBtn,
  MDBTable,
  MDBTableBody,
} from "mdbreact";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
import "./subcomponents/styles/image_styles.css";
import projectStyles from "./subcomponents/styles/Styles";
import eeau from "../pictures/energy efficie cy association of uganda.png";
import unreeea from "../pictures/unreeea.png";
import choice_delivery from "../pictures/choice delivery.png";
import gabrial from "../pictures/gabriel sustainable solutions.PNG";
import aotconsulting from "../pictures/aotconsulting.png";
import poweroneforone from "../pictures/poweroneforone.png";
import aream from "../pictures/aream.webp";
import firebase from "../firebase.js";
import FooterList from "./subcomponents/footerList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energyCalculatorModal: false,
      device: "",
      devicePowerWatts: 0,
      powerWattsPerDay: 0,
      powerWattsPerWeek: 0,
      powerWattsPerMonth: 0,
      weeks_per_month: "",
      days_per_week: "",
      hours_per_day: "",
      number_of_devices: "",
      number_of_devices_error: "0px",
      hours_per_day_error: "0px",
      days_per_week_error: "0px",
      weeks_per_month_error: "0px",
      total_units: "00",
      blog_data: [],
      is_small_device: false,
    };
  }

  componentDidMount() {
    this.check_width();
    this.retrieveFromFirestore();
  }

  retrieveFromFirestore = () => {
    firebase
      .firestore()
      .collection("blog")
      .onSnapshot((snapshot) => {
        const blog = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ blog_data: blog });
        this.retrieveFromStorage();
      });
  };

  retrieveFromStorage = () => {
    let blog = [];
    this.state.blog_data.forEach((post) => {
      firebase
        .storage()
        .ref()
        .child(`/blog/${post.file}`)
        .getDownloadURL()
        .then((url) => {
          blog.push({
            id: post.id,
            type: post.type,
            description: post.description,
            file: url,
          });
          this.setState({ blog_data: blog });
        })
        .catch((error) => {
          // in case of error // may be the file wasn't found in the storage
          if (post.type === "youtube") {
            // we use the youtube embed link
            blog.push({
              id: post.id,
              type: post.type,
              description: post.description,
              file: post.file,
            });
            this.setState({ blog_data: blog });
          } else {
            blog.push({
              id: post.id,
              type: post.type,
              description: post.description,
              file: "",
            });
            this.setState({ blog_data: blog });
          }
        });
    });
  };

  calculator_col_style = {
    borderRight: "1px solid #eee",
    borderBottom: "1px solid #eee",
    minHeight: 80,
    paddingTop: 25,
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
      ),
    },
    {
      title: "PGE-SWS",
      buttonText: "order",
      image: sws,
      buttonAction: "oder_SWS",
      details: "Solar Water Heating System (flat plate, glass tube, & sovaltten)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-SLS",
      buttonText: "order",
      image: sls,
      buttonAction: "oder_SLS",
      details: "Solar Lighting System (all in one street, compound and garden lights, indoor and outdoor lights)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-CRS",
      buttonText: "order",
      image: crs,
      buttonAction: "oder_CRS",
      details: "Solar refrigeration & cold chain systems (solar fridges, freezer, cold rooms storage, systems)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-SAB",
      buttonText: "order",
      image: sab,
      buttonAction: "oder_SAB",
      details: "Solar Agri-Business (solar water pumps, milling machines and dryers)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-SPS",
      buttonText: "order",
      image: sps,
      buttonAction: "oder_SPS",
      details: "Security & Protection Systems (CCTV cameras, firefighting & alarm systems, lightning protection systems)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-EPE",
      buttonText: "order",
      image: epe,
      buttonAction: "oder_EPE",
      details: "Electrical tools & personal protection equipment (meters, hand tools, power tools, & personal protection equipment".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-ESC",
      buttonText: "order",
      image: esc,
      buttonAction: "oder_ESC",
      details: "Services (design, installation & maintenance of solar systems, energy metering, energy consultancy services, energy efficiency, training, etc.)".substring(
        0,
        100
      ),
    },
  ];

  select_devices = [
    { title: "Air-Conditioner 1000w", power: 1000 },
    { title: "Air-Conditioner 1500w", power: 1500 },
    { title: "CFL Lamp 5w", power: 5 },
    { title: "CFL Lamp 8w", power: 8 },
    { title: "CFL Lamp 11w", power: 11 },
    { title: "CFL Lamp 15w", power: 15 },
    { title: "CFL Lamp 20w", power: 20 },
    { title: "Computer 200w", power: 200 },
    { title: "Electric Iron 600w", power: 600 },
    { title: "Electric Iron 1000w", power: 1000 },
    { title: "Exhaust Fan 150w", power: 150 },
    { title: "Immersion Heater 1000w", power: 1000 },
    { title: "Immersion Heater 1500w", power: 1500 },
    { title: "Microwave Oven 1500w", power: 1500 },
    { title: "Mixer cum Grinder 200w", power: 200 },
    { title: "Pump Motor 380w", power: 380 },
    { title: "Pump Motor 740w", power: 740 },
    { title: "Radio 40w", power: 40 },
    { title: "Refrigetor(165 litres) 150w", power: 150 },
    { title: "Refrigetor(210 litres) 270w", power: 270 },
    { title: "Regular Lamp 25w", power: 25 },
    { title: "Regular Lamp 40w", power: 40 },
    { title: "Regular Lamp 60w", power: 60 },
    { title: "Regular Lamp 100w", power: 100 },
    { title: "Home Heater 1000w", power: 1000 },
    { title: "Home Heater 1500w", power: 1500 },
    { title: "Home Heater 2000w", power: 2000 },
    { title: "Table Fan/Ceiling Fan 60w", power: 60 },
    { title: "Table Fan/Ceiling Fan 100w", power: 100 },
    { title: "Television 200w", power: 200 },
    { title: "Toaster 750w", power: 750 },
    { title: "Washing Machine 700w", power: 700 },
    { title: "Water Heater/Geyser 1000w", power: 1000 },
    { title: "Water Heater/Geyser 1500w", power: 1500 },
    { title: "Water Heater/Geyser 2000w", power: 2000 },
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

  // My calculator
  // 1. energy calculator
  // --------------------
  device_selected(power_value) {
    // change state of input fields
    this.setState({
      devicePowerWatts: power_value,
      powerWattsPerDay: power_value,
      powerWattsPerWeek: power_value,
      powerWattsPerMonth: power_value,
      number_of_devices: 1,
      hours_per_day: 1,
      days_per_week: 1,
      weeks_per_month: 1,
      total_units: "00",
    });
  }
  handle_changed_number_of_devices = (event) => {
    this.setState({
      number_of_devices: event.target.value,
    });
    if (event.target.value > 0) {
      this.setState({
        powerWattsPerDay:
          event.target.value *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.hours_per_day),
        powerWattsPerWeek:
          event.target.value *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.hours_per_day) *
          Number.parseInt(this.state.days_per_week),
        powerWattsPerMonth:
          event.target.value *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.hours_per_day) *
          Number.parseInt(this.state.days_per_week) *
          Number.parseInt(this.state.weeks_per_month),
        total_units: this.calculate_total_units(
          event.target.value,
          this.state.devicePowerWatts,
          Number.parseInt(this.state.hours_per_day),
          Number.parseInt(this.state.days_per_week),
          Number.parseInt(this.state.weeks_per_month)
        ),
        number_of_devices_error: "0px",
      });
    } else {
      this.setState({
        number_of_devices_error: "1px solid red",
      });
    }
  };
  handle_changed_hours_per_day = (event) => {
    this.setState({
      hours_per_day: event.target.value,
    }); // first change the value of the input the check if it passes the condition
    if (event.target.value > 0 && event.target.value <= 24) {
      this.setState({
        powerWattsPerDay:
          event.target.value *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        powerWattsPerWeek:
          event.target.value *
          Number.parseInt(this.state.days_per_week) *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        powerWattsPerMonth:
          event.target.value *
          Number.parseInt(this.state.days_per_week) *
          Number.parseInt(this.state.weeks_per_month) *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        total_units: this.calculate_total_units(
          event.target.value,
          Number.parseInt(this.state.days_per_week),
          Number.parseInt(this.state.weeks_per_month),
          this.state.devicePowerWatts,
          Number.parseInt(this.state.number_of_devices)
        ),
        hours_per_day_error: "0px",
      });
    } else {
      this.setState({
        hours_per_day_error: "1px solid red",
      });
    }
  };
  handle_changed_days_per_week = (event) => {
    this.setState({
      days_per_week: event.target.value,
    });
    if (event.target.value > 0 && event.target.value <= 7) {
      this.setState({
        powerWattsPerDay:
          Number.parseInt(this.state.hours_per_day) *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        powerWattsPerWeek:
          Number.parseInt(this.state.hours_per_day) *
          event.target.value *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        powerWattsPerMonth:
          Number.parseInt(this.state.hours_per_day) *
          event.target.value *
          Number.parseInt(this.state.weeks_per_month) *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        total_units: this.calculate_total_units(
          Number.parseInt(this.state.hours_per_day),
          event.target.value,
          Number.parseInt(this.state.weeks_per_month),
          this.state.devicePowerWatts,
          Number.parseInt(this.state.number_of_devices)
        ),
        days_per_week_error: "0px",
      });
    } else {
      this.setState({
        days_per_week_error: "1px solid red",
      });
    }
  };
  handle_changed_weeks_per_month = (event) => {
    this.setState({
      weeks_per_month: event.target.value,
    });
    if (event.target.value > 0 && event.target.value <= 4) {
      this.setState({
        powerWattsPerDay:
          Number.parseInt(this.state.hours_per_day) *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        powerWattsPerWeek:
          Number.parseInt(this.state.hours_per_day) *
          Number.parseInt(this.state.days_per_week) *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        powerWattsPerMonth:
          Number.parseInt(this.state.hours_per_day) *
          Number.parseInt(this.state.days_per_week) *
          event.target.value *
          this.state.devicePowerWatts *
          Number.parseInt(this.state.number_of_devices),
        total_units: this.calculate_total_units(
          Number.parseInt(this.state.hours_per_day),
          Number.parseInt(this.state.days_per_week),
          event.target.value,
          this.state.devicePowerWatts,
          Number.parseInt(this.state.number_of_devices)
        ),
        weeks_per_month_error: "0px",
      });
    } else {
      this.setState({
        weeks_per_month_error: "1px solid red",
      });
    }
  };

  calculate_total_units(
    number_of_devices,
    devicePowerWatts,
    hours_per_day,
    days_per_week,
    weeks_per_month
  ) {
    let units;
    try {
      units =
        (number_of_devices *
          devicePowerWatts *
          hours_per_day *
          days_per_week *
          weeks_per_month) /
        1000;
    } catch (error) {
      units = "00";
    }
    return units;
  }

  our_partners = [
    { picture: eeau, link: "http://unreeea.org/members/eeau/" },
    { picture: unreeea, link: "http://unreeea.org/" },
    { picture: choice_delivery, link: "http://en.choicexp.com/info621.html" },
    { picture: gabrial, link: "#" },
    { picture: aotconsulting, link: "https://www.aotconsulting.co.ug/" },
    { picture: poweroneforone, link: "http://poweroneforone.de/" },
    { picture: aream, link: "https://www.aream.de/" },
  ];

  check_width = () => {
    if (window.screen.availWidth < 500) {
      this.setState({ is_small_device: true });
    } else {
      this.setState({ is_small_device: false });
    }
  };

  check_width_size() {
    if (this.state.is_small_device) {
      return "100%"; // for small platforms (phones)
    } else {
      return 400; // for big platforms (computers,ipads,...)
    }
  }

  render() {
    return (
      <div
        style={{
          minHeight: 800,
          backgroundColor: project().home_component_background_color,
        }}
      >
        <Slider />
        <Container style={{ paddingTop: 10 }} fluid>
          <Row style={{ paddingBottom: 30 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              <GoogleFontNavItem
                text={"What we offer"}
                fontfamily={"labelle"}
              />
            </span>
          </Row>
          <Row>
            {this.cards_data.map((data) => {
              return (
                <Col
                  dm={3}
                  style={{
                    paddingBottom: 20,
                  }}
                >
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
                fontWeight: "bold",
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
              color: "white",
            }}
          >
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.energy_calculator}
            >
              <GoogleFontNavItem
                text={"energy calculator"}
                fontfamily={"tangerine"}
              />
            </Col>
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.solar_calculator}
            >
              <GoogleFontNavItem
                text={"solar calculator"}
                fontfamily={"tangerine"}
              />
            </Col>
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.water_calculator}
            >
              <GoogleFontNavItem
                text={"water pump calculator"}
                fontfamily={"tangerine"}
              />
            </Col>
            <Col
              className="shakethis"
              style={this.calculator_col_style}
              onClick={this.carbon_calculator}
            >
              <GoogleFontNavItem
                text={"carbon footprint calculator"}
                fontfamily={"tangerine"}
              />
            </Col>
          </Row>
          <Row style={{ paddingTop: 20, paddingBottom: 30 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              <GoogleFontNavItem text={"Our Partners"} fontfamily={"labelle"} />
            </span>
          </Row>
          <Row
            style={{
              backgroundColor: "white",
              minHeight: 120,
            }}
          >
            {this.our_partners.map((data) => {
              return (
                <Col
                  dm={3}
                  style={{
                    margin: "auto",
                    textAlign: "center",
                  }}
                >
                  <a href={data.link}>
                    <Image
                      src={data.picture}
                      style={{
                        height: 80,
                        width: 110,
                      }}
                    />
                  </a>
                </Col>
              );
            })}
          </Row>
          <Row style={{ paddingBottom: 30, paddingTop: 20 }}>
            <span
              style={{
                margin: "auto",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              <GoogleFontNavItem
                text={"What's new about Solar Energy ?"}
                fontfamily={"labelle"}
              />
            </span>
          </Row>
          {this.state.blog_data.map((post) => {
            console.log(post.file);
            if (post.type === "picture") {
              return (
                <Row>
                  <Col
                    dm={5}
                    style={{
                      minHeight: 300,
                      Width: 400,
                      paddingTop: 25,
                      paddingBottom: 25,
                      textAlign: "center",
                    }}
                  >
                    <Image
                      fluid
                      src={post.file}
                      alt="Image Loading..."
                      style={{
                        height: "300px",
                        width: "400px",
                        boxShadow:
                          "0 8px 16px 16px rgba(0, 0, 0, 0.2), 0 12px 40px 40px rgba(0, 0, 0, 0.19)",
                      }}
                    />
                  </Col>
                  <Col
                    lg={7}
                    style={{
                      minHeight: 100,
                      Width: 400,
                      margin: "0 auto",
                      paddingTop: 25,
                      paddingBottom: 25,
                      paddingRight: 60,
                      fontSize: 20,
                    }}
                  >
                    <GoogleFontNavItem
                      text={post.description}
                      fontfamily={"tangerine"}
                    />
                  </Col>
                </Row>
              );
            } else if (post.type === "video") {
              return (
                <Row>
                  <Col
                    dm={5}
                    style={{
                      minHeight: 300,
                      Width: 400,
                      paddingTop: 25,
                      paddingBottom: 25,
                      textAlign: "center",
                    }}
                  >
                    <video
                      controls
                      src={post.file}
                      alt="Video Loading..."
                      style={{
                        height: 300,
                        width: this.check_width_size(),
                        border: 0,
                        boxShadow:
                          "0 8px 16px 16px rgba(0, 0, 0, 0.2), 0 12px 40px 40px rgba(0, 0, 0, 0.19)",
                      }}
                    />
                  </Col>
                  <Col
                    lg={7}
                    style={{
                      minHeight: 100,
                      Width: 400,
                      margin: "0 auto",
                      paddingTop: 25,
                      paddingBottom: 25,
                      paddingRight: 60,
                      fontSize: 20,
                    }}
                  >
                    <GoogleFontNavItem
                      text={post.description}
                      fontfamily={"tangerine"}
                    />
                  </Col>
                </Row>
              );
            } else if (post.type === "youtube") {
              console.log("youtube link: " + post.file);
              return (
                <Row>
                  <Col
                    dm={5}
                    style={{
                      minHeight: 300,
                      Width: 400,
                      paddingTop: 25,
                      paddingBottom: 25,
                      textAlign: "center",
                    }}
                  >
                    <iframe
                      title="video" // unique title
                      src={post.file}
                      style={{
                        height: 300,
                        width: this.check_width_size(),
                        border: 0,
                        boxShadow:
                          "0 8px 16px 16px rgba(0, 0, 0, 0.2), 0 12px 40px 40px rgba(0, 0, 0, 0.19)",
                      }}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </Col>
                  <Col
                    lg={7}
                    style={{
                      minHeight: 100,
                      Width: 400,
                      margin: "0 auto",
                      paddingTop: 25,
                      paddingBottom: 25,
                      paddingRight: 60,
                      fontSize: 20,
                    }}
                  >
                    <GoogleFontNavItem
                      text={post.description}
                      fontfamily={"tangerine"}
                    />
                  </Col>
                </Row>
              );
            } else {
              return "";
            }
          })}
        </Container>
        <FooterList />
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
                        <Autocomplete
                          id="select"
                          options={this.select_devices}
                          getOptionLabel={(option) => option.title} // is like a forEach to fill the select tag options
                          onChange={(event, value) => {
                            //console.log(value); // an object with title and power values
                            this.device_selected(value.power);
                          }}
                          style={{
                            width: 175,
                          }}
                          size="small"
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Device"
                              variant="outlined"
                              color="primary" // or secondary
                            />
                          )}
                        />
                      </Col>
                      <Col>Number</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="numberOfDevices"
                            label={"1"}
                            onChange={this.handle_changed_number_of_devices}
                            value={this.state.number_of_devices}
                            onBlur=""
                            type="number"
                            style={{
                              fontSize: 15,
                              fontFamilly: "sans-serif",
                              border: this.state.number_of_devices_error,
                              borderRadius: "5px",
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>PWatts</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="powerWattsPerDay"
                            // label={0}
                            value={this.state.powerWattsPerDay}
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
                            id="hoursPerDay"
                            label={"hours"}
                            onChange={this.handle_changed_hours_per_day}
                            value={this.state.hours_per_day}
                            onBlur=""
                            type="number"
                            style={{
                              fontSize: 15,
                              fontFamilly: "sans-serif",
                              border: this.state.hours_per_day_error,
                              borderRadius: "5px",
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>PWatts</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="powerWattsPerWeek"
                            // label={0}
                            value={this.state.powerWattsPerWeek}
                            disabled
                            onBlur=""
                            style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                          />
                        </FormGroup>
                      </Col>
                      <Col>perWeek</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="daysPerWeek"
                            label={"days"}
                            onChange={this.handle_changed_days_per_week}
                            value={this.state.days_per_week}
                            onBlur=""
                            type="number"
                            style={{
                              fontSize: 15,
                              fontFamilly: "sans-serif",
                              border: this.state.days_per_week_error,
                              borderRadius: "5px",
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>PWatts</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="powerWattsPerMonth"
                            // label={0}
                            value={this.state.powerWattsPerMonth}
                            disabled
                            onBlur=""
                            style={{
                              fontSize: 15,
                              fontFamilly: "sans-serif",
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col>perMonth</Col>
                      <Col>
                        <FormGroup>
                          <FloatingLabelInput
                            id="weeksPerMonth"
                            label={"weeks"}
                            onChange={this.handle_changed_weeks_per_month}
                            value={this.state.weeks_per_month}
                            onBlur=""
                            type="number"
                            style={{
                              fontSize: 15,
                              fontFamilly: "sans-serif",
                              border: this.state.weeks_per_month_error,
                              borderRadius: "5px",
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        style={{
                          textAlign: "center",
                          color: project().projectColor,
                          fontWeight: "bolder",
                          fontSize: 28,
                        }}
                      >
                        <span>
                          Total is {this.state.total_units} units{" "}
                          {/* <GoogleFontNavItem
                            text={"Total is "+this.state.total_units+" units"}
                            fontfamily={"pacifico"}
                          /> */}
                        </span>
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
