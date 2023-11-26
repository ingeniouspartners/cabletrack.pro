import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Cables } from '../../api/cable/Cables';
import LoadingSpinner from '../components/LoadingSpinner';
import CableList from '../components/CableList';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const ListCable = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, cables } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const cableItems = Cables.collection.find({}).fetch();
    return {
      cables: cableItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <CableList cables={cables} />
  ) : <LoadingSpinner />);
};

export default ListCable;
