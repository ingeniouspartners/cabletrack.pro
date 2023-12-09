import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, useLocation } from 'react-router';
import { CablePullIns } from '../../api/cable/CablePullIns';
import CablePullInEdit from '../components/CablePullInEdit';
import PageWrapper from '../components/PageWrapper';
import { NavEditCablePullIn } from '../../api/testcafe/TestCafe';

const EditCablePullIn = () => {
  const { pullinID, cableID, projectID, companyID } = useParams();
  const location = useLocation();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, pullIn } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(CablePullIns.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    let pullInItem;
    if (location.pathname.endsWith('/add')) {
      pullInItem = { companyID: companyID, projectID: projectID, cableID: cableID, personInstalled: Meteor.userId(), dateInstalled: Date.now(), lengthInstalled: '', pulledHand: '', tugger: '', tuggerCalibrationID: '', maxPullingTension: '',
        notes: '', _id: '' };
    } else {
      pullInItem = CablePullIns.collection.findOne(pullinID);
    }
    return {
      pullIn: pullInItem,
      ready: rdy,
    };
  }, [pullinID, cableID, projectID, companyID]);

  return (
    <PageWrapper id={NavEditCablePullIn} ready={ready}>
      <CablePullInEdit pullin={pullIn} />
    </PageWrapper>
  );
};

export default EditCablePullIn;
