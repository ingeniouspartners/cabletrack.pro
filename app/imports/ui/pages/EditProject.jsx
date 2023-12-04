import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useLocation, useParams } from 'react-router';
import { Projects } from '../../api/project/Projects';
import { Companies } from '../../api/company/Companies';
import ProjectEdit from '../components/ProjectEdit';
import PageWrapper from '../components/PageWrapper';
import { NavEditProject } from '../../api/testcafe/TestCafe';

/* Renders the EditProject page for editing or adding a single project. */
const EditProject = () => {
  const { projectID, companyID } = useParams();
  const location = useLocation();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, project } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Project documents.
    const projectSub = Meteor.subscribe(Projects.adminPublicationName);
    const companySub = Meteor.subscribe(Companies.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = projectSub.ready() && companySub.ready();
    // Get the Cable documents
    let projectItem;
    if (location.pathname.endsWith('/add')) {
      projectItem = { companyID: companyID, name: '', code: '', contract: '', bidNumber: '', jobPhone: '', jobFax: '', mailAddress: {}, shipAddress: {}, jobEmail: '', notes: '', _id: '' };
    } else {
      projectItem = Projects.collection.findOne(projectID);
    }
    return {
      project: projectItem,
      ready: rdy,
    };
  }, [projectID, companyID]);

  return (
    <PageWrapper id={NavEditProject} ready={ready}>
      <ProjectEdit project={project} />
    </PageWrapper>
  );
};

export default EditProject;
