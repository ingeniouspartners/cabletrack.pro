import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Projects } from '../../api/project/Projects';
import ProjectList from '../components/ProjectList';
import LoadingSpinner from '../components/LoadingSpinner';
import { Companies } from '../../api/company/Companies';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListProject = () => {
  const { companyID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, projects, company } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const projectItems = Projects.collection.find({}).fetch();
    const companyItem = Companies.collection.findOne(companyID);
    return {
      projects: projectItems,
      company: companyItem,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={8}>
          <ProjectList projects={projects} company={company} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListProject;
