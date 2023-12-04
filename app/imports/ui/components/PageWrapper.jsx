import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';

const PageWrapper = ({ ready, children }) => (
  ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={8}>
          {children}
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />
);

PageWrapper.propTypes = {
  ready: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default PageWrapper;
