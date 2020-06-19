import React, { useState } from "react";
import firebase from "../firebase.js";
import { useEffect } from "react";
import FooterList from "./subcomponents/footerList";
import project from "./subcomponents/static";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
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
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Services() {
  /*
  const [firebaseData, setFirebaseData] = useState([]);
  const saveToFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .add({ name: "charly", role: "system engineer" })
      .then(() => {
        // do something // promise is resolved or rejected
      });
  };

  const retrieveFromFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })); // ...  --> spread operator will join id with fields inside the document to form a javascript object
        setFirebaseData(users);
      });
  };
  useEffect(retrieveFromFirestore);
  */

  const user_details = useSelector((state) => state.userSigning);
  const selection = user_details.selection ? user_details.selection : [];
  const [hideCards, setHideCards] = useState(true);

  const cards_data = [
    {
      title: "PGE-SPV",
      buttonText: "Add to cart",
      image: image3,
      buttonAction: "oder_SPV",
      details: "Solar Photovoltaic System (panels, batteries, inverters, remote controllers monitoring panels, etc.".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-SWS",
      buttonText: "Add to cart",
      image: sws,
      buttonAction: "oder_SWS",
      details: "Solar Water Heating System (flat plate, glass tube, & sovaltten)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-SLS",
      buttonText: "Add to cart",
      image: sls,
      buttonAction: "oder_SLS",
      details: "Solar Lighting System (all in one street, compound and garden lights, indoor and outdoor lights)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-CRS",
      buttonText: "Add to cart",
      image: crs,
      buttonAction: "oder_CRS",
      details: "Solar refrigeration & cold chain systems (solar fridges, freezer, cold rooms storage, systems)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-SAB",
      buttonText: "Add to cart",
      image: sab,
      buttonAction: "oder_SAB",
      details: "Solar Agri-Business (solar water pumps, milling machines and dryers)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-SPS",
      buttonText: "Add to cart",
      image: sps,
      buttonAction: "oder_SPS",
      details: "Security & Protection Systems (CCTV cameras, firefighting & alarm systems, lightning protection systems)".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-EPE",
      buttonText: "Add to cart",
      image: epe,
      buttonAction: "oder_EPE",
      details: "Electrical tools & personal protection equipment (meters, hand tools, power tools, & personal protection equipment".substring(
        0,
        100
      ),
    },
    {
      title: "PGE-ESC",
      buttonText: "Add to cart",
      image: esc,
      buttonAction: "oder_ESC",
      details: "Services (design, installation & maintenance of solar systems, energy metering, energy consultancy services, energy efficiency, training, etc.)".substring(
        0,
        100
      ),
    },
  ];

  const select_products = [
    {
      title: "PGE-SPV",
      price: 200000,
      description:
        "Solar Photovoltaic System (panels, batteries, inverters, remote controllers monitoring panels, etc.",
      photo: image3,
    },
    {
      title: "PGE-SWS",
      price: 370000,
      description:
        "Solar Water Heating System (flat plate, glass tube, & sovaltten)",
      photo: sws,
    },
    {
      title: "PGE-SLS",
      price: 280000,
      description:
        "Solar Lighting System (all in one street, compound and garden lights, indoor and outdoor lights)",
      photo: sls,
    },
    {
      title: "PGE-CRS",
      price: 400000,
      description:
        "Solar refrigeration & cold chain systems (solar fridges, freezer, cold rooms storage, systems)",
      photo: crs,
    },
    {
      title: "PGE-SAB",
      price: 390000,
      description:
        "Solar Agri-Business (solar water pumps, milling machines and dryers)",
      photo: sab,
    },
    {
      title: "PGE-SPS",
      price: 1300000,
      description:
        "Security & Protection Systems (CCTV cameras, firefighting & alarm systems, lightning protection systems)",
      photo: sps,
    },
    {
      title: "PGE-EPE",
      price: 500000,
      description:
        "Electrical tools & personal protection equipment (meters, hand tools, power tools, & personal protection equipment",
      photo: epe,
    },
    {
      title: "PGE-ESC",
      price: 448000,
      description:
        "Services (design, installation & maintenance of solar systems, energy metering, energy consultancy services, energy efficiency, training, etc.)",
      photo: esc,
    },
  ];

  const product_selected = (product_title) => {};

  const check_Autocomplete_width = () => {
    if (window.screen.availWidth < 500) {
      return 200;
    }
    return 300;
  };

  useEffect(() => {
    if (user_details.selection) {
      if (user_details.selection.length > 0) {
        setHideCards(true);
      } else {
        setHideCards(false);
      }
    } else {
      setHideCards(false);
    }
  }, [user_details.selection]);

  const check_column_paddingleft = () => {
    // those 2 columns // each one has minimum width of 200 // so the two columns can only show together if screen width is equal or greater than 400
    if (window.screen.availWidth < 400) {
      return 30;
    }
    return 0;
  };

  const check_column_textalign = () => {
    // those 2 columns // each one has minimum width of 200 // so the two columns can only show together if screen width is equal or greater than 400
    if (window.screen.availWidth < 400) {
      return "left";
    }
    return "center";
  };

  return (
    <div style={{ minHeight: 500 }}>
      <Container
        fluid
        style={{
          minHeight: 500,
          backgroundColor: project().home_component_background_color,
          paddingBottom: 30,
        }}
      >
        <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }} // alignItems: "center"  --> vertically // justifyContent: "center" --> horizontally
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingRight: 20,
              }}
            >
              <GoogleFontNavItem text={"Search here"} fontfamily={"labelle"} />
            </span>
            <Autocomplete
              id="select"
              options={select_products}
              getOptionLabel={(option) => option.description} // is like a forEach to fill the select tag options
              onChange={(event, value) => {
                if (value) {
                  product_selected(value.title);
                }
              }}
              style={{ width: check_Autocomplete_width() }}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product"
                  variant="outlined"
                  color="primary" // or secondary
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          {selection.map((selected_product) => {
            if (user_details.selection) {
              if (user_details.selection.length > 0) {
                let service = select_products.find(
                  (product) => product.title === selected_product
                ); // if it does not find any matching object in the array // service will be undefined
                if (service) {
                  return (
                    <Col lg={6}>
                      <Row>
                        <Col
                          style={{
                            minHeight: 200,
                            minWidth: 200,
                            paddingTop: 25,
                            paddingBottom: 25,
                            textAlign: check_column_textalign(),
                          }}
                        >
                          <Image
                            fluid
                            src={service.photo}
                            alt="Image Loading..."
                            style={{
                              height: "200px",
                              width: "200px",
                            }}
                          />
                        </Col>
                        <Col
                          style={{
                            minHeight: 100,
                            minWidth: 200,
                            margin: "0 auto",
                            paddingTop: 25,
                            paddingBottom: 25,
                            paddingRight: 30,
                            paddingLeft: check_column_paddingleft(),
                          }}
                        >
                          <Row style={{ fontSize: 20 }}>
                            <GoogleFontNavItem
                              text={service.title}
                              fontfamily={"tangerine"}
                            />
                          </Row>
                          <Row style={{ fontSize: 15 }}>
                            <GoogleFontNavItem
                              text={service.description}
                              fontfamily={"tangerine"}
                            />
                          </Row>
                          <Row style={{ fontSize: 17, paddingTop: 10 }}>
                            <GoogleFontNavItem
                              text={
                                Number.parseFloat(
                                  service.price
                                ).toLocaleString() + " ugx"
                              }
                              fontfamily={"tangerine"}
                            />
                          </Row>
                          <Row style={{ fontSize: 17, paddingTop: 10 }}>
                            <Button
                              variant="outline-success"
                              style={{
                                backgroundColor: "#FFFFF",
                                marginTop: 2,
                              }}
                            >
                              <GoogleFontNavItem
                                text={"Remove"}
                                fontfamily={"tangerine"}
                              />
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  );
                }
              }
            }
          })}
        </Row>
        <Row hidden={!hideCards} style={{ marginTop: 20 }}>
          <Col
            lg={12}
            style={{
              textAlign: "center",
            }}
          >
            <Button
              variant="outline-success"
              style={{
                width: 150,
              }}
            >
              <span>
                <FontAwesomeIcon icon={faShoppingCart} color={"#FFFFF"} />
                <span style={{ paddingLeft: 5 }}>
                  <GoogleFontNavItem
                    text={"Order now"}
                    fontfamily={"tangerine"}
                  />
                </span>
              </span>
            </Button>
            <span
              style={{ fontSize: 18, paddingLeft: 30, fontWeight: "bolder" }}
            >
              <GoogleFontNavItem
                text={"Your cart is ready !"}
                fontfamily={"vibes"}
              />
            </span>
          </Col>
        </Row>
        <Row hidden={hideCards}>
          {cards_data.map((data) => {
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
      </Container>
      <FooterList />
    </div>
  );
}

export default Services;
