import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col } from 'react-bootstrap';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Col xs={4} className="text-center">
      <h2>Signed Out</h2>
    </Col>
  );
};

export default SignOut;
