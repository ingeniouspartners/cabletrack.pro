import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useLocation, useParams } from 'react-router';
import PageWrapper from '../components/PageWrapper';
import { Cables } from '../../api/cable/Cables';
import CableEdit from '../components/CableEdit';
import { PageEditCable } from '../../api/testcafe/TestCafe';

/**
 * Render the Page for adding or editing a single cable.
 * @returns {Element}
 * @constructor
 */
const EditCable = () => {
  // Get the cableID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { cableID, companyID, projectID } = useParams();
  const location = useLocation();

  // console.log('CableEdit', cableId);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { cable, ready } = useTracker(() => {
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the cable if it exists and it is ready or create a new one
    let cableItem;
    if (location.pathname.endsWith('/add')) {
      // eslint-disable-next-line max-len
      cableItem = { _id: '', companyID: companyID, projectID: projectID, name: '', description: '', costCode: '', refDrawingNo: '', refDrawingRev: '', system: '', building: '', zone: '', origination: '', termination: '', lengthPlanned: 0,
        classification: 'Power', cableType: '', conductors: '', voltageCable: '', voltageTest: '', notes: '', users: '' };
    } else {
      cableItem = Cables.collection.findOne(cableID);
    }
    return {
      cable: cableItem,
      ready: rdy,
    };
  }, [cableID, location]);
  return (
    <PageWrapper id={PageEditCable} ready={ready}>
      <CableEdit cable={cable} />
    </PageWrapper>
  );
};

export default EditCable;
