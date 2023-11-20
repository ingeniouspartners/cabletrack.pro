import React from 'react';
import { Row, Container, Image, Col } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3">
    <Container text="center">
      <Row>
        <Col className="col-12 text-center">
          <Image className="app-logo" src="/images/logo.png" alt="CableTrack PRO" />
        </Col>
      </Row>
      <Row>
        <Col className="col-12 text-center">
          <span id="copyright">Copyright &copy; 2023 CableTrackPRO, INC</span>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 text-center links-row">
          <a href="https://ingeniouspartners.github.io/">IngeneousPartners</a>
          <span> | </span>
          <a href="https://github.com/ingeniouspartners/cabletrack.pro">CableTrackPro</a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
