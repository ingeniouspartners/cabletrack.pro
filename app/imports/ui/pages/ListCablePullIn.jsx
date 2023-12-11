import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { CablePullIns } from '../../api/cable/CablePullIns';
import CablePullInList from '../components/CablePullInList';
import PageWrapper from '../components/PageWrapper';
import { PageEditCablePullIn } from '../../api/testcafe/TestCafe';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const ListCablePullIn = () => {
  const { companyID, projectID, cableID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, pullins } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(CablePullIns.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const pullInItems = CablePullIns.collection.find({ companyID: companyID, projectID: projectID, cableID: cableID }).fetch();
    return {
      pullins: pullInItems,
      ready: rdy,
    };
  }, []);

  return (
    <PageWrapper id={PageEditCablePullIn} ready={ready}>
      <CablePullInList pullins={pullins} companyID={companyID} projectID={projectID} cableID={cableID} />
    </PageWrapper>
  );
};

export default ListCablePullIn;
