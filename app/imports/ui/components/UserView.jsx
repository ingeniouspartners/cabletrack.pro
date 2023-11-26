import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PropTypeUser } from '../../api/propTypes/PropTypes';

const UserView = ({ user }) => (
  <Container className="p-5">
    <Row>
      <Col>
        <Image src={user.picture} />
      </Col>
      <Col>
        <Row>
          <Col>Name: {user.name}</Col>
          <Col>UserID: {user.userID}</Col>
        </Row>
        <Row>
          <Col>Address: {user.address}</Col>
          <Col>Secondary Address: {user.address2}</Col>
        </Row>
        <Row>
          <Col>City: {user.city}</Col>
          <Col>State: {user.state}</Col>
        </Row>
        <Row>
          <Col>Zip: {user.zip}</Col>
          <Col>Country: {user.country}</Col>
        </Row>
        <Row>
          <Col>Phone: {user.phone}</Col>
          <Col>Fax: {user.fax}</Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

// Require a document to be passed to this component.
UserView.propTypes = {
  user: PropTypeUser.isRequired,
};

export default UserView;
