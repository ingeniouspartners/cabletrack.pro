import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Cables } from '../../api/cable/Cables';
import CableListItem from './CableListItem';
import LoadingSpinner from './LoadingSpinner';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const CableList = (cables) => {
  <Container className="py-3" fluid>
    <Row className="justify-content-center">
      <Col md={7}>
        <Col className="text-center">
          <h2>List Cables</h2>
        </Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {cables.map((cable) => <CableListItem key={cable._id} cable={cable} />)}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>;
};

export default CableList;