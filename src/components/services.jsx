import React, { useState, useEffect } from "react";
import firebase from "../firebase.js";
import FooterList from "./subcomponents/footerList";
import project from "./subcomponents/static";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Modal,
  FormGroup,
} from "react-bootstrap";
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
import cash from "../pictures/cash.jpg";
import debitcard from "../pictures/card.jpg";
import mobilemoney from "../pictures/mobilemoney.jpg";
import GoogleFontNavItem from "./subcomponents/fonts/googleFontForNavItems";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import RemoveProduct from "./subcomponents/RemoveProductButton.jsx";
import projectStyles from "./subcomponents/styles/Styles.js";
import FloatingLabelInput from "react-floating-label-input";
import $ from "jquery";
import LinearDeterminate from "./subcomponents/linearProgressBar.js";

function Services() {
  const user_details = useSelector((state) => state.userSigning);
  const selection = user_details.selection ? user_details.selection : [];
  const [hideCards, setHideCards] = useState(true);
  const [orderModal, setOrderModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState(
    user_details.address ? user_details.address : ""
  );
  const [paymentMode, setPaymentMode] = React.useState(0);
  const [cashMode, setCashMode] = React.useState(false);
  const [debitCardMode, setDebitCardMode] = React.useState(false);
  const [mobileMoneyMode, setMobileMoneyMode] = React.useState(false);
  const [hiddenLinearDeterminate, setHiddenLinearDeterminate] = useState(true);

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 500,
    },
  });

  const classes = useStyles();

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
    //
    let total_price = 0;
    selection.map((selected_product) => {
      if (user_details.selection) {
        if (user_details.selection.length > 0) {
          let product_results = select_products.find(
            (product) => product.title === selected_product
          ); // if it does not find any matching object in the array // product_results will be undefined
          if (product_results) {
            total_price =
              total_price + Number.parseFloat(product_results.price);
          }
        }
      }
    });
    setTotal(total_price);
  }, [user_details.selection, selection, select_products]);

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
      alert("A Network Error occurred! try again");
    }
  };

  // when this component is loaded
  $(document).ready(function () {
    // ScreenOrientation {angle: 0, type: "portrait-primary", onchange: null}
    // ScreenOrientation {angle: 90, type: "landscape-primary", onchange: null}
    // window.screen.orientation.type  // window.screen.orientation.angle

    if (window.screen.availWidth < 400) {
      $(".columnWithImage").css("text-align", "left");
      $(".columnWithText").css("padding-left", 30);
    } else {
      $(".columnWithImage").css("text-align", "center");
      $(".columnWithText").css("padding-left", 0);
    }
    $(window).on("orientationchange", function (event) {
      if (window.screen.availWidth < 400) {
        $(".columnWithImage").css("text-align", "left");
        $(".columnWithText").css("padding-left", 30);
      } else {
        $(".columnWithImage").css("text-align", "center");
        $(".columnWithText").css("padding-left", 0);
      }
    });
  });

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

  const confirmOrder = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHiddenLinearDeterminate(false);
    // check if selection length is greater than 0
    if (user_details.selection) {
      if (selection.length > 0) {
        try {
          await selection.map((selectionProduct) => {
            saveOrder({
              customer: user_details.id,
              product: selectionProduct,
              address: address,
              paymentMode: getpaymentMethod(),
              date: new Date().toString(),
            });
          });
          updateUserSelection(user_details.id, address);
        } catch (error) {
          setHiddenLinearDeterminate(true);
          $("#WarningTextId").html("A Network Error occurres! Try again");
        }
      } else {
        setHiddenLinearDeterminate(true);
        $("#WarningTextId").html("No item selected!");
      }
    } else {
      setHiddenLinearDeterminate(true);
      $("#WarningTextId").html("A Error occurred! Try again");
    }
    // save orders // empty the selection array and update address at the same time // thank the user
  };

  const saveOrder = async (order) => {
    try {
      await firebase.firestore().collection("orders").add(order);
    } catch (error) {
      setHiddenLinearDeterminate(true);
      $("#WarningTextId").html("A Network Error occurres! Try again");
    }
  };

  const updateUserSelection = async (id, address) => {
    try {
      await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .update({ selection: [], address: address }); // onsnapshot() will update values in the redux store
      setHiddenLinearDeterminate(true);
      $("#SuccessTextId").html(
        "Your order was processed successfully. Thank you for choosing PawaGreen Energy!"
      );
      $("#SuccessTextId").css("color", "#1D8348");
    } catch (error) {
      alert("A Network Error occurred! try again");
    }
  };

  const getpaymentMethod = () => {
    if (cashMode) {
      return "cash_mode";
    } else if (mobileMoneyMode) {
      return "mobile_money_mode";
    } else if (debitCardMode) {
      return "debit_card_mode";
    } else {
      return "none";
    }
  };

  const handleChangeAddress = (event) => {
    if (!hiddenLinearDeterminate) {
      return; // meaning the orders are being processed
    }
    setAddress(event.target.value);
  };

  const handleChangePaymentMode = (event, mode) => {
    if (!hiddenLinearDeterminate) {
      return; // meaning the orders are being processed
    }
    setPaymentMode(mode); // 0 --> cash // 1 --> mobile money // 2 --> debit card
    switch (mode) {
      case 0:
        setCashMode(true);
        setMobileMoneyMode(false);
        setDebitCardMode(false);
        break;
      case 1:
        setMobileMoneyMode(true);
        setCashMode(false);
        setDebitCardMode(false);
        break;
      case 2:
        setDebitCardMode(true);
        setMobileMoneyMode(false);
        setCashMode(false);
        break;
      default:
        break;
    }
  };

  const validateFormConfirmOrder = () => {
    if (address.trim().length < 1) {
      $("#WarningTextId").html("address is required !");
      return false;
    } else if (!cashMode) {
      return false; // just for now as only cash on delivery is working
    } else if (!hiddenLinearDeterminate) {
      return false; // to prevent user from clicking many times // after the first click
    } else if (selection.length < 1) {
      return false; // after orders were processed successfully // user might click again but selection will be empty
    } else {
      $("#WarningTextId").html("");
      return true;
    }
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
        <Row style={{ paddingTop: 10 }}>
          <Col lg={12} style={{ textAlign: "left" }}>
            <span>
              <FontAwesomeIcon icon={faUserCircle} color={"#000000"} />
            </span>
            <span style={{ paddingLeft: 4, color: "black" }}>
              <GoogleFontNavItem
                text={user_details.name}
                fontfamily={"labelle"}
              />
            </span>
          </Col>
        </Row>
        <Row style={{ paddingTop: 10, paddingBottom: 20 }}>
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
                          }}
                          className="columnWithImage"
                        >
                          <Image
                            fluid
                            src={service.photo}
                            alt="Image Loading..."
                            style={{
                              height: "200px",
                              width: "200px",
                              borderRadius: 6,
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
                          }}
                          className="columnWithText"
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
                                "UGX " +
                                Number.parseFloat(
                                  service.price
                                ).toLocaleString()
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
                <GoogleFontNavItem
                  text={"Your Order (" + selection.length + " items)"}
                  fontfamily={"tangerine"}
                />
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <Row style={{ paddingBottom: 5 }}>
                <Col>
                  <span
                    style={{
                      textAlign: "left",
                      color: project().projectColor,
                      fontWeight: "bold",
                    }}
                  >
                    <GoogleFontNavItem
                      text={"Address Details"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </Col>
              </Row>
              <Row style={{ paddingBottom: 0 }}>
                <Col>
                  <FormGroup>
                    <FloatingLabelInput
                      id="AddressId"
                      label={"address"}
                      type="address"
                      onBlur=""
                      value={address}
                      onChange={handleChangeAddress}
                      style={{
                        fontSize: 15,
                        fontFamilly: "sans-serif",
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ paddingBottom: 5 }}>
                <Col>
                  <span
                    style={{
                      textAlign: "left",
                      color: project().projectColor,
                      fontWeight: "bold",
                    }}
                  >
                    <GoogleFontNavItem
                      text={"Payment Method"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </Col>
              </Row>
              <Row style={{ paddingBottom: 10 }}>
                {/* <Col>Cash on Delivery</Col>
                <Col>Mobile Money</Col>
                <Col>Debit Card</Col> */}
                <Col>
                  <Paper square className={classes.root} variant="outlined">
                    <Tabs
                      value={paymentMode}
                      onChange={handleChangePaymentMode}
                      variant="scrollable"
                      indicatorColor={project().projectColor}
                      textColor={project().projectColor}
                      aria-label="icon tabs example"
                    >
                      <Tab label="Cash on Delivery" />
                      <Tab label="Mobile Money" />
                      <Tab label="Debit Card" />
                    </Tabs>
                  </Paper>
                  <Row
                    hidden={!cashMode}
                    style={{
                      paddingTop: 10,
                      paddingLeft: 5,
                      paddingBottom: 5,
                      paddingRight: 5,
                    }}
                  >
                    <Col>
                      <Image
                        fluid
                        src={cash}
                        alt="Image Loading..."
                        style={{
                          height: "40px",
                          width: "80px",
                        }}
                      />
                      <span>
                        <span
                          style={{
                            color: "black",
                            paddingLeft: 10,
                          }}
                        >
                          <GoogleFontNavItem
                            text={
                              "You will pay after delivery and installation"
                            }
                            fontfamily={"tangerine"}
                          />
                        </span>
                      </span>
                    </Col>
                  </Row>
                  <Row
                    hidden={!mobileMoneyMode}
                    style={{
                      paddingTop: 10,
                      paddingLeft: 5,
                      paddingBottom: 5,
                      paddingRight: 5,
                    }}
                  >
                    <Col>
                      <Image
                        fluid
                        src={mobilemoney}
                        alt="Image Loading..."
                        style={{
                          height: "40px",
                          width: "80px",
                        }}
                      />
                      <span>
                        <span
                          style={{
                            color: "black",
                            paddingLeft: 10,
                          }}
                        >
                          <GoogleFontNavItem
                            text={
                              "This option will be available soon. Use cash on delivery!"
                            }
                            fontfamily={"tangerine"}
                          />
                        </span>
                      </span>
                    </Col>
                  </Row>
                  <Row
                    hidden={!debitCardMode}
                    style={{
                      paddingTop: 10,
                      paddingLeft: 5,
                      paddingBottom: 5,
                      paddingRight: 5,
                    }}
                  >
                    <Col>
                      <Image
                        fluid
                        src={debitcard}
                        alt="Image Loading..."
                        style={{
                          height: "40px",
                          width: "80px",
                        }}
                      />
                      <span>
                        <span
                          style={{
                            color: "black",
                            paddingLeft: 10,
                          }}
                        >
                          <GoogleFontNavItem
                            text={
                              "This option will be available soon. Use cash on delivery!"
                            }
                            fontfamily={"tangerine"}
                          />
                        </span>
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span
                    style={{
                      textAlign: "left",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <GoogleFontNavItem
                      text={"Total"}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </Col>
                <Col>
                  <span
                    style={{
                      textAlign: "right",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <GoogleFontNavItem
                      text={"UGX " + total.toLocaleString()}
                      fontfamily={"tangerine"}
                    />
                  </span>
                </Col>
              </Row>
              <Row hidden={hiddenLinearDeterminate} style={{ paddingTop: 5 }}>
                <Col>
                  <LinearDeterminate />
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="text-danger" id="WarningTextId"></span>
                  <span id="SuccessTextId"></span>
                </Col>
              </Row>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={hideOrderModal}>
              <GoogleFontNavItem text={"cancel"} fontfamily={"tangerine"} />
            </Button>
            <MDBBtn
              className="btn-success"
              style={projectStyles().buttonStyle}
              disabled={!validateFormConfirmOrder()}
              type="submit"
            >
              <GoogleFontNavItem
                text={"confirm order"}
                fontfamily={"tangerine"}
              />
            </MDBBtn>
          </Modal.Footer>
        </form>
      </Modal>
      {/* ---popup window--- */}
    </div>
  );
}

export default Services;
