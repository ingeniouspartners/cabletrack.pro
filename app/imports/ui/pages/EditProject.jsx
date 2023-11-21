import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Projects } from '../../api/project/Projects';
import ProjectEdit from '../components/ProjectEdit';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders the EditStuff page for editing a single document. */
const EditProject = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { project_id } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Projects.collection.findOne(project_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [project_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.

  return ready ? (
    <ProjectEdit project_id={project_id} doc={doc} />
  ) : <LoadingSpinner />;
};

export default EditProject;
