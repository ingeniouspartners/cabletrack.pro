import React from 'react';
import { useParams } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import ProjectEdit from '../components/ProjectEdit';
import { Companies } from '../../api/company/Companies';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders the AddStuff page for adding a document. */
const AddProject = () => {
  const { companyID } = useParams();
  const { ready, company } = useTracker(() => {
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    const rdy = subscription.ready();
    const comp = Companies.collection.findOne({ _id: companyID });
    return {
      ready: rdy,
      company: comp,
    };
  }, [companyID]);
  return ready ? (
    <div id="add-project-page">
      <ProjectEdit companyID={company} />
    </div>
  ) : <LoadingSpinner />;
};

export default AddProject;
