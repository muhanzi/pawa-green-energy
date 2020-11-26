import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { MDBContainer, MDBDataTable } from "mdbreact";
import project from "./subcomponents/static";
import FooterList from "./subcomponents/footerList";
import firebase from "../firebase.js";
import GoogleFontNavItem from "./subcomponents/fonts/googleFontForNavItems";
import ShowUserName from "./subcomponents/showUserName";

class Administration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allOrders: [],
      data: {},
    };
  }

  retrieveOrders = () => {
    firebase
      .firestore()
      .collection("orders")
      .onSnapshot((snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id, // this id is the id of the document // order id
          ...doc.data(),
        })); // ...  --> spread operator will join id with fields inside the document to form a javascript object
        this.setState({ allOrders: orders });
        this.arrangeData();
      });
  };

  arrangeData = () => {
    let orders = [];
    let order_number = 1;
    this.state.allOrders.forEach((order) => {
      firebase
        .firestore()
        .collection("users")
        .doc(order.customer)
        .get()
        .then((user_data) => {
          if (user_data.exists) {
            orders.push({
              order_number: order_number,
              product: order.product,
              name: user_data.data().name,
              phone: user_data.data().phone,
              address: order.address,
              date: new Intl.DateTimeFormat().format(new Date(order.date)), // Internationalization API it formats a date according to the computer default locale
              payment_mode: order.paymentMode,
              clickEvent: () => {
                // !! must return a function here  // pass order.id // in a function you want to execute
              },
            });
            this.setState({
              data: {
                columns: [
                  {
                    label: "No",
                    field: "order_number",
                    sort: "asc",
                    width: 100,
                  },
                  {
                    label: "Product",
                    field: "product",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Name",
                    field: "name",
                    sort: "asc",
                    width: 270,
                  },
                  {
                    label: "Phone",
                    field: "phone",
                    sort: "asc",
                    width: 200,
                  },
                  {
                    label: "Address",
                    field: "address",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Date",
                    field: "date",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Payment mode",
                    field: "payment_mode",
                    sort: "asc",
                    width: 150,
                  },
                ],
                rows: orders,
              },
            });
            order_number++;
          }
        });
    });
  };

  componentDidMount() {
    this.retrieveOrders();
  }

  render() {
    return (
      <div style={{ minHeight: 500 }}>
        <MDBContainer
          fluid
          style={{
            minHeight: 400,
            backgroundColor: project().home_component_background_color,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 5,
            paddingTop: 5,
          }}
        >
          <Row style={{ paddingBottom: 10 }}>
            <Col>
              <span
                className="badge badge m-2"
                style={{
                  fontSize: 20,
                  backgroundColor: project().projectColor,
                  color: "white",
                  paddingLeft: 50,
                  paddingRight: 50,
                  paddingTop: 12,
                  paddingBottom: 12,
                }}
              >
                <GoogleFontNavItem
                  text={"List of orders"}
                  fontfamily={"tangerine"}
                />
              </span>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <ShowUserName />
            </Col>
          </Row>
          <MDBContainer>
            <MDBDataTable
              scrollY
              maxHeight="100vh"
              striped
              hover
              bordered
              small
              responsive
              data={this.state.data}
              id="tableID"
            />
          </MDBContainer>
        </MDBContainer>
        <FooterList />
      </div>
    );
  }
}

export default Administration;
