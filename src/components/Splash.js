import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../styles/Splash.scss";

const Splash = () => (
  <div className="background">
    <Container id="splash-container">
      <Row>
        <Col />
        <Col>
          <LinkContainer to="/about">
            <Button>Test</Button>
          </LinkContainer>
        </Col>
        <Col />
      </Row>
    </Container>
  </div>
);

export default Splash;
