import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** Render a Not Found page if the user enters a URL that is non-existent in the routing. */
const NotFound = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={4} className="text-center">
        <h2>Not Found</h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
