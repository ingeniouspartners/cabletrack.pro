import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/Projects';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders the EditStuff page for editing a single document. */
const ViewProject = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, project } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const projectItem = Projects.collection.findOne(_id);
    return {
      project: projectItem,
      ready: rdy,
    };
  }, [_id]);

  return (
    <Container className="py-3">
      {ready ? (
        <Row className="justify-content-center">
          <Col className="text-center">
            <Row>
              <Col> </Col>
              <Col><h2>{project.name}</h2></Col>
              <Col><Link to={`/edit/${project._id}`}><Button variant="primary">Edit</Button></Link></Col>
            </Row>
            <h5>{project.code}</h5>
          </Col>
          <h3>{project.associatedUsers}</h3>
        </Row>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
};

export default ViewProject;
