import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Cables } from '../../api/cable/Cables';
import CableViewItem from './CableViewItem';
import LoadingSpinner from './LoadingSpinner';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const CableView = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('CableView', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Cables.collection.findOne(_id);
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
                <th>Description</th>
                <th>RefDrawingNo</th>
                <th>RefDrawingRev</th>
                <th>System</th>
                <th>Building</th>
                <th>Zone</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              { doc ? <CableViewItem key={doc._id} cable={doc} /> : ''}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default CableView;
