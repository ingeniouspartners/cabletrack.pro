import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { Cables } from '../../api/cable/Cables';
import CableView from '../components/CableView';
import PageWrapper from '../components/PageWrapper';

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
  return (
    <PageWrapper ready={ready}>
      <Row className="justify-content-center">
        <Col md={6}>
          <CableView cable={cable} />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default ViewCable;
