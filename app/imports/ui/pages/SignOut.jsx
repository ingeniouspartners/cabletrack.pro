import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container } from 'react-bootstrap';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Container id="signout-page">
      <Col xs={4} className="text-center">
        <h2>Signed Out</h2>
      </Col>
    </Container>
  );
};

export default SignOut;
