import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Cables } from '../../api/cable/Cables';
import LoadingSpinner from '../components/LoadingSpinner';
import CableView from '../components/CableView';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const ViewCable = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { cable_id } = useParams();
  // console.log('CableView', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { cable, ready } = useTracker(() => {
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const cableItem = Cables.collection.findOne(cable_id);
    return {
      cable: cableItem,
      ready: rdy,
    };
  }, [cable_id]);
  return (ready ? (
    <CableView cable={cable} />
  ) : <LoadingSpinner />);
};

export default ViewCable;
