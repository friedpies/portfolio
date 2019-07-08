import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import "../styles/Splash.scss";

const Splash = () => (
  <div className="background">
    <div id="splash-container" className="container">
      <div className="row">
        <div className="col sm" id="splash-content-div">
          <div>
            <h3>Heading</h3>
            <p>
              Cillum eu cillum magna magna eu elit. Id reprehenderit cupidatat
              sunt veniam sint eiusmod cillum id commodo nulla ad proident.
              Magna aute tempor reprehenderit et culpa.
            </p>
          </div>
          <LinkContainer to="/about">
            <Button>Test</Button>
          </LinkContainer>
        </div>
        <div className="col sm" />
      </div>
    </div>
  </div>
);

export default Splash;
