import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Projects } from '../../api/project/Projects';
import { Companies } from '../../api/company/Companies';
import ProjectEdit from '../components/ProjectEdit';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders the EditStuff page for editing a single document. */
const EditProject = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { projectID, companyID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready, company } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Projects.collection.findOne(projectID);
    const com = Companies.collection.findOne({ _id: companyID });
    return {
      doc: document,
      ready: rdy,
      company: com,
    };
  }, [projectID]);

  return ready ? (
    <div id="edit-project-page">
      <ProjectEdit projectID={projectID} doc={doc} companyID={company._id} />
    </div>
  ) : <LoadingSpinner />;
};

export default EditProject;
