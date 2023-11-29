import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { Cables } from '../../api/cable/Cables';
import LoadingSpinner from '../components/LoadingSpinner';
import CableList from '../components/CableList';

/* Renders a table containing all the Cable documents. Use <CableList> to render the table. */
const ListCable = () => {
  const { companyID, projectID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, cables } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const cableItems = Cables.collection.find({ companyID: companyID, projectID: projectID }).fetch();
    return {
      cables: cableItems,
      ready: rdy,
    };
  }, [companyID, projectID]);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <CableList cables={cables} companyID={companyID} projectID={projectID} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListCable;
