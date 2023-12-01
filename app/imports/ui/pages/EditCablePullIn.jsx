import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, useLocation } from 'react-router';
import { CablePullIns } from '../../api/cable/CablePullIns';
import CablePullInEdit from '../components/CablePullInEdit';
import PageWrapper from '../components/PageWrapper';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const EditCablePullIn = () => {
  const { pullinID } = useParams();
  const location = useLocation();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, pullin } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(CablePullIns.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    let pullInItem;
    if (location.pathname.endsWith('/add')) {
      pullInItem = { companyID: '', projectID: '', cableID: '', personInstalled: '', dateInstalled: '', lengthInstalled: '', pulledHand: '', tugger: '', tuggerCalibrationID: '', maxPullingTension: '', notes: '', _id: '' };
    } else {
      pullInItem = CablePullIns.collection.findOne(pullinID);
    }
    return {
      pullin: pullInItem,
      ready: rdy,
    };
  }, []);

  return (
    <PageWrapper ready={ready}>
      <CablePullInEdit pullin={pullin} />
    </PageWrapper>
  );
};

export default EditCablePullIn;
