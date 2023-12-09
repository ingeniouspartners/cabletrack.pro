import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Projects } from '../../api/project/Projects';
import { Cables } from '../../api/cable/Cables';
import { CablePullIns } from '../../api/cable/CablePullIns';
import CablePullInView from '../components/CablePullInView';
import PageWrapper from '../components/PageWrapper';

/* Renders a form containing the Cable PullIn. */
const ViewCablePullIn = () => {
  const { projectID, cableID, pullinID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, pullin, cable, project } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const pullInSub = Meteor.subscribe(CablePullIns.userPublicationName);
    const cableSub = Meteor.subscribe(Cables.userPublicationName);
    const projectSub = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = pullInSub.ready() && cableSub.ready() && projectSub.ready();
    // Get the Cable documents
    const pullInItem = CablePullIns.collection.findOne(pullinID);
    const cableItem = Cables.collection.findOne(cableID);
    const projectItem = Projects.collection.findOne(projectID);
    return {
      pullin: pullInItem,
      cable: cableItem,
      project: projectItem,
      ready: rdy,
    };
  }, [projectID, cableID, pullinID]);

  return (
    <PageWrapper ready={ready}>
      <CablePullInView cablePullIn={pullin} cable={cable} project={project} />
    </PageWrapper>
  );
};

export default ViewCablePullIn;
