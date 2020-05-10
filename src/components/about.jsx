import React, { Component } from "react";
import FooterList from "./subcomponents/footerList";
import project from "./subcomponents/static";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  spanStyle = {
    fontSize: 22,
    backgroundColor: project().projectColor,
    color: "white",
    padding: 12,
  };

  checkWidth = () => {
    if (window.screen.availWidth < 500) {
      return 15;
    }
    return 40;
  };

  render() {
    return (
      <div>
        <Container
          fluid
          style={{
            minHeight: 500,
            backgroundColor: project().home_component_background_color,
            paddingBottom: 30,
            paddingLeft: this.checkWidth(),
            paddingRight: this.checkWidth(),
          }}
        >
          <Row style={{ paddingTop: 20 }}>
            <Col>
              <span style={this.spanStyle} className="badge badge m-2">
                Company Profile
              </span>
            </Col>
          </Row>
          <Row style={{ padding: 10 }}>
            <Col style={{ textAlign: "justify", fontSize: 20 }}>
              PawaGreen energy is a Ugandan based renewable energy enterprise
              registered under the Ugandan law. We specifically target energy
              development services and emerging markets, with our core business
              being Energy Access, Energy Efficiency, Renewable Energy, Climate
              Change adaptation and mitigation through our customer – centric
              and diversely experienced team of dedicated experts who
              consistently delivers top – notch services to our esteemed
              clients. At PawaGreen energy, we believe that sustainable energy
              development is at the heart of socio – economic transformation of
              communities. Drawing lessons from successful experiences in the
              world energy arena, PawaGreen energy is able to develop and
              implement appropriate energy solutions for its clients that are
              aimed at mitigating climate change, achieving and conserving our
              environment.
            </Col>
          </Row>
          <Row style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
            <Col
              style={{
                color: project().projectColor,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Our Vision
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10, paddingRight: 10 }}>
            <Col style={{ textAlign: "justify", fontSize: 20 }}>
              To be a 3D (Driven by Data and Digital) Renewable Energy company
              providing total renewable energy solutions to customers.
            </Col>
          </Row>
          <Row style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
            <Col
              style={{
                color: project().projectColor,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Our Expertise
            </Col>
          </Row>
          <Row style={{ padding: 10 }}>
            <Col style={{ textAlign: "justify", fontSize: 20 }}>
              At PawaGreen Energy we;
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  paddingRight: 10,
                }}
              >
                .
              </span>
              <span>
                Provide unique solutions and techniques to ensure the successful
                delivery of Renewable and sustainable energy projects instantly
              </span>
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  paddingRight: 10,
                }}
              >
                .
              </span>
              <span>
                Deliver value and quality for our esteemed clients with
                creative, experienced and highly skilled Engineering team in
                design, installation, operation and maintenance of high quality
                sustainable energy solutions
              </span>
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  paddingRight: 10,
                }}
              >
                .
              </span>
              <span>
                Value our clients and tailor solutions based on their interests
                and needs
              </span>
            </Col>
          </Row>
          <Row style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
            <Col
              style={{
                color: project().projectColor,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Our Mission
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10, paddingLeft: 10, paddingRight: 10 }}>
            <Col style={{ textAlign: "justify", fontSize: 20 }}>
              To be a 3D (Driven by Data and Digital) Renewable Energy company
              providing total renewable energy solutions to customers.
            </Col>
          </Row>
        </Container>
        <FooterList />
      </div>
    );
  }
}

export default About;
