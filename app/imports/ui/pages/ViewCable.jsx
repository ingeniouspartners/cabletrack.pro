import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { Cables } from '../../api/cable/Cables';
import { Projects } from '../../api/project/Projects';
import LoadingSpinner from '../components/LoadingSpinner';
import CableView from '../components/CableView';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const ViewCable = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { cableID, projectID } = useParams();
  // console.log('CableView', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { cable, project, ready } = useTracker(() => {
    // Get access to Cable documents.
    const cableSub = Meteor.subscribe(Cables.adminPublicationName);
    const projectSub = Meteor.subscribe(Projects.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = cableSub.ready() && projectSub.ready();
    // Get the document
    const cableItem = Cables.collection.findOne(cableID);
    const projectItem = Projects.collection.findOne(projectID);
    return {
      cable: cableItem,
      project: projectItem,
      ready: rdy,
    };
  }, [cableID, projectID]);
  return (ready ? (
    <Container className="py-3" fluid>
      <Row className="justify-content-center">
        <Col md={7}>
          <CableView cable={cable} project={project} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ViewCable;
