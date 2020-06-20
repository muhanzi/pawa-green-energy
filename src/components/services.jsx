import React, { useState } from "react";
import firebase from "../firebase.js";
import { useEffect } from "react";
import FooterList from "./subcomponents/footerList";
import project from "./subcomponents/static";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
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
import RemoveProduct from "./subcomponents/RemoveProductButton.jsx";
import projectStyles from "./subcomponents/styles/Styles.js";

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
  const [orderModal, setOrderModal] = useState(false);

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

  const product_selected = (product_title) => {
    if (user_details.id) {
      user_details.selection.push(product_title);
      updateFirestore(user_details.selection, user_details.id);
    }
  };

  const updateFirestore = async (selection, id) => {
    try {
      await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .update({ selection: selection }); // onsnapshot() will update values in the redux store
    } catch (error) {
      alert("An Error occurred! try again");
    }
  };

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

  const check_fontsize = () => {
    if (window.screen.availWidth <= 360) {
      return 15;
    }
    return 18;
  };

  const showOrderModal = () => {
    setOrderModal(true);
  };

  const hideOrderModal = () => {
    setOrderModal(false);
  };

  const confirmOrder = (event) => {
    event.preventDefault();
    event.stopPropagation();
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
              getOptionLabel={(product) => product.description} // is like a forEach to fill the select tag options
              onChange={(event, product) => {
                // if an object is selected
                if (product) {
                  product_selected(product.title);
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
                            <RemoveProduct product={service.title} />
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
              onClick={showOrderModal}
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
              style={{
                fontSize: check_fontsize(),
                paddingLeft: 20,
                fontWeight: "bolder",
              }}
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
      {/* ---popup window--- */}

      <Modal
        show={orderModal}
        onHide={hideOrderModal} // when the closeButton 'X'  is clicked
        centered
      >
        <form onSubmit={confirmOrder}>
          <Modal.Header closeButton>
            <Modal.Title>
              <span
                style={projectStyles().spanStyle2}
                className="badge badge m-2"
              >
                Confirm Order
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              {/* <FormGroup>
                <FloatingLabelInput
                  id="LoginEmailId"
                  label={"Email"}
                  type="email"
                  onBlur=""
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                  style={{ fontSize: 15, fontFamilly: "sans-serif" }}
                />
              </FormGroup>
              <FormGroup>
                <FloatingLabelInput
                  id="LoginPasswordId"
                  label={"Password"}
                  onBlur=""
                  type="password"
                  name="Password"
                  value={password}
                  onChange={handleChangePassword}
                  style={{ fontSize: 15 }}
                />
              </FormGroup>
              Don't have an account ?{" "}
              <a
                href="#"
                style={{ color: project().projectColor }}
                onClick={showSignUp}
              >
                Register
              </a>
              <FormGroup
                style={{ paddingTop: 20 }}
                hidden={hiddenLoginLinearDeterminate}
              >
                <LinearDeterminate />
              </FormGroup>
              <FormGroup>
                <span className="text-danger" id="loginWarningTextId"></span>
              </FormGroup> */}
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={hideOrderModal}>
              Cancel
            </Button>
            <MDBBtn
              className="btn-success"
              style={projectStyles().buttonStyle}
              //disabled={!validateFormLogin()}
              type="submit"
            >
              confirm
            </MDBBtn>
          </Modal.Footer>
        </form>
      </Modal>
      {/* ---popup window--- */}
    </div>
  );
}

export default Services;
