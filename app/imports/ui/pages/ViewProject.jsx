import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Projects } from '../../api/project/Projects';
import ProjectView from '../components/ProjectView';
import PageWrapper from '../components/PageWrapper';

/* Renders the EditStuff page for editing a single document. */
const ViewProject = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { projectID, companyID } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, project } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const projectItem = Projects.collection.findOne(projectID);
    return {
      project: projectItem,
      ready: rdy,
    };
  }, [projectID, companyID]);

  return (
    <PageWrapper ready={ready}>
      <ProjectView project={project} />
    </PageWrapper>
  );
};

export default ViewProject;
