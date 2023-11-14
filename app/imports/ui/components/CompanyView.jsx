import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Companies } from '../../api/company/Companies';
import CompanyViewItem from './CompanyViewItem';
import LoadingSpinner from './LoadingSpinner';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const CompanyView = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  console.log('CableView', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Companies.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  return (ready ? (
    <Container className="py-3" fluid>
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>View Cable</h2>
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
  ) : <LoadingSpinner />);
};

export default CompanyView;
