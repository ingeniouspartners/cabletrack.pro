import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import Project from '../components/Project';
import LoadingSpinner from '../components/LoadingSpinner';
import * as CTPNav from '../../api/navigation/Navigation';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListProject = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, projects } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const projectItems = Projects.collection.find({}).fetch();
    return {
      projects: projectItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <Row>
              <Col> </Col>
              <Col><h2>Projects</h2></Col>
              <Col><Link to={CTPNav.PathAddProject}><Button variant="primary">Add Project</Button></Link></Col>
            </Row>
          </Col>
          <Row>
            {projects.map((project) => (<Row className="p-3" key={project._id}><Project project={project} /></Row>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListProject;
