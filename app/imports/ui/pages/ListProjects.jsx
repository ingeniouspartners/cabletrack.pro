import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Projects } from '../../api/Project/Projects';
import Project from '../components/Project';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListProjects = () => {
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
              <Col><Button variant="primary" href="/project/add">Add Project</Button></Col>
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

export default ListProjects;
