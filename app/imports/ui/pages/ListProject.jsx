import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Projects } from '../../api/project/Projects';
import ProjectList from '../components/ProjectList';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListProject = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, projects } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    console.log('something');
    const rdy = subscription.ready();
    // Get the Stuff documents
    const projectItems = Projects.collection.find({}).fetch();
    return {
      projects: projectItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <ProjectList projects={projects} />
  ) : <LoadingSpinner />);
};

export default ListProject;
