import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useLocation, useParams } from 'react-router';
import React from 'react';
import { Cables } from '../../api/cable/Cables';
import CableEdit from '../components/CableEdit';
import LoadingSpinner from '../components/LoadingSpinner';
import CompanyEdit from '../components/CompanyEdit';
import { Companies } from '../../api/company/Companies';

/* Renders the EditStuff page for editing a single document. */
const EditCable = () => {
  // Get the cableID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { cable_id: cableId } = useParams();
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
      cableItem = { _id: '', name: '', description: '', costCode: '', refDrawingNo: '', refDrawingRev: '', system: '', building: '', zone: '', origination: '', termination: '', lengthPlanned: 0, classification: 'Power', cableType: '', conductors: '', voltageCable: '', voltageTest: '', notes: '', users: '' };
    } else {
      cableItem = Companies.collection.findOne(cableId);
    }
    return {
      cable: cableItem,
      ready: rdy,
    };
  }, [cableId, location]);
  return ready ? (
    <CableEdit cable={cable} />
  ) : <LoadingSpinner />;

};

export default EditCable;
