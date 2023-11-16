import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import LoadingSpinner from '../components/LoadingSpinner';
import * as CTPNav from '../../api/navigation/Navigation';
import { ParamProjectID } from '../../api/navigation/Navigation';

/* Renders the EditStuff page for editing a single document. */
const ViewProject = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { project_id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, project } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const projectItem = Projects.collection.findOne(project_id);
    return {
      project: projectItem,
      ready: rdy,
    };
  }, [project_id]);

  return (
    <Container className="py-3">
      {ready ? (
        <Row className="justify-content-center">
          <Col className="text-center">
            <Row>
              <Col> </Col>
              <Col><h2>{project.name}</h2></Col>
              <Col><Link to={CTPNav.PathEditProject.replace(`:${ParamProjectID}`, project_id)}><Button variant="primary">Edit</Button></Link></Col>
            </Row>
            <h5>{project.code}</h5>
          </Col>
          <h5>{project.contract}</h5>
          <h5>{project.bidNumber}</h5>
          <h5>{project.jobPhone}</h5>
          <h5>{project.jobFax}</h5>
          <h5>{project.jobEmail}</h5>
          <h5>{project.notes}</h5>
          <h1> Mail Address</h1>
          <h5>{project.mailAddress.address}</h5>
          <h5>{project.mailAddress.address2}</h5>
          <h5>{project.mailAddress.city}</h5>
          <h5>{project.mailAddress.state}</h5>
          <h5>{project.mailAddress.zip}</h5>
          <h5>{project.mailAddress.country}</h5>
          <h1> Ship Address </h1>
          <h5>{project.shipAddress.address}</h5>
          <h5>{project.shipAddress.address2}</h5>
          <h5>{project.shipAddress.city}</h5>
          <h5>{project.shipAddress.state}</h5>
          <h5>{project.shipAddress.zip}</h5>
          <h5>{project.shipAddress.country}</h5>
        </Row>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
};

export default ViewProject;
