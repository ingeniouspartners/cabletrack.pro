import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Cables } from '../../api/cable/Cables';
import CableItemView from './CableItemView';
import LoadingSpinner from './LoadingSpinner';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const CableView = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, cables } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const cableItems = Cables.collection.find({}).fetch();
    return {
      cables: cableItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3" fluid>
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>View Cables</h2>
          </Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Description</th>
                <th>RefDrawingNo</th>
                <th>RefDrawingRev</th>
                <th>System</th>
                <th>Building</th>
                <th>Zone</th>
                <th>Origination</th>
                <th>Termination</th>
                <th>Length Planned</th>
                <th>Classification</th>
                <th>Cable Type</th>
                <th>Conductors</th>
                <th>Voltage Cable</th>
                <th>Voltage Test</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {cables.map((cable) => <CableItemView key={cable._id} cable={cable} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default CableView;
