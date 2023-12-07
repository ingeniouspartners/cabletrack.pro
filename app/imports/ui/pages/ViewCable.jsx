import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { Cables } from '../../api/cable/Cables';
import LoadingSpinner from '../components/LoadingSpinner';
import CableView from '../components/CableView';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const ViewCable = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { cableID } = useParams();
  // console.log('CableView', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { cable, ready } = useTracker(() => {
    // Get access to Cable documents.
    const cableSub = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = cableSub.ready();
    // Get the document
    const cableItem = Cables.collection.findOne(cableID);
    return {
      cable: cableItem,
      ready: rdy,
    };
  }, [cableID]);
  return (ready ? (
    <Container className="py-3" fluid>
      <Row className="justify-content-center">
        <Col md={7}>
          <CableView cable={cable} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ViewCable;
