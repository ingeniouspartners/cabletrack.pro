import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Companies } from '../../api/company/Companies';
import CompanyViewItem from './CompanyViewItem';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const CompanyView = (company) => {
  return ( (
    <Container className="py-3" fluid>
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>View Company</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Zip</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            { doc ? <CompanyViewItem key={doc._id} company={doc} /> : ''}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) )
};

CompanyView.propTypes = {
  company: PropTypes.arrayOf(Object),
};
export default CompanyView;
