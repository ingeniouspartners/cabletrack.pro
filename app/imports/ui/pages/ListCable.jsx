import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { Cables } from '../../api/cable/Cables';
import CableList from '../components/CableList';
import PageWrapper from '../components/PageWrapper';

/* Renders a table containing all the Cable documents. Use <CableList> to render the table. */
const ListCable = () => {
  const { companyID, projectID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, cables } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const cableItems = Cables.collection.find({ companyID: companyID, projectID: projectID }).fetch();
    return {
      cables: cableItems,
      ready: rdy,
    };
  }, [companyID, projectID]);
  return (
    <PageWrapper ready={ready}>
      <Row className="justify-content-center">
        <Col xs={5}>
          <CableList cables={cables} companyID={companyID} projectID={projectID} />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default ListCable;
