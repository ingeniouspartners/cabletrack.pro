import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** Render a Not Authorized page if the user enters a URL that is protected and the criteria is not met. */
const NotAuthorized = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={4} className="text-center">
        <h2>Not Authorized</h2>
      </Col>
    </Row>
  </Container>
);

export default NotAuthorized;
