import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import project from "./static";

function ContactBar() {
  return (
    <div>
      <Container fluid={true}>
        <Row
          style={{
            backgroundColor: project().projectColor,
            color: "white"
          }}
        >
          <Col dm={4} style={{ minHeight: 30 }}>
            Email:{" "}
            <a
              href="http://pawagreenenergy@gmail.com"
              style={{ color: "white" }}
            >
              info@pawagreenenergy.com
            </a>
          </Col>
          <Col dm={4} style={{ minHeight: 30 }}>
            Tel: +256773218545
          </Col>
          <Col dm={4} style={{ minHeight: 30 }}>
            TIN: 1014728519
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactBar;
