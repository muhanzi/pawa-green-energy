import React, { useState } from "react";
import firebase from "../firebase.js";
import { useEffect } from "react";
import FooterList from "./subcomponents/footerList";
import project from "./subcomponents/static";
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
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";

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

  const cards_data = [
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

  const product_selected = (power_value) => {};

  const check_Autocomplete_width = () => {
    if (window.screen.availWidth < 500) {
      return 200;
    }
    return 300;
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
          {
            cards_data.map((data) => {
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
            })

            /*
            () => {
              if (user_details.selection.length > 0) {
                // show the products that user has selected // with the design we planned
                user_details.selection.map((product_selected) => {
                  select_products.filter((product) => {
                    if (product.title === product_selected) {
                      return (
                        <Row>
                          <Col>picture</Col>
                          <Col>product_selected</Col>
                        </Row>
                      );
                    }
                  });
                });
              } else {
                cards_data.map((data) => {
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
                });
              }
            }*/
          }
        </Row>
      </Container>
      <FooterList />
    </div>
  );
}

export default Services;
