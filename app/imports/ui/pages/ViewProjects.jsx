import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Projects } from '../../api/Projects';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ViewProjects = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
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
      <h2>View Project</h2>
    </Container>
  ) : <LoadingSpinner />);
};

export default ViewProjects;
