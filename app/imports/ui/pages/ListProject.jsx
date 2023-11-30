import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Projects } from '../../api/project/Projects';
import ProjectList from '../components/ProjectList';
import PageWrapper from '../components/PageWrapper';
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

  return (
    <PageWrapper ready={ready}>
      <ProjectList projects={projects} company={company} />
    </PageWrapper>
  );
};

export default ListProject;
