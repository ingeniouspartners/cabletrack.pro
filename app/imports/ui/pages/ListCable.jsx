import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Cables } from '../../api/cable/Cables';
import CableListItem from '../components/CableItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const ListCable = () => {
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
    </Container>
  ) : <LoadingSpinner />);
};

export default ListCable;
