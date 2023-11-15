import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import React from 'react';
import { Cables } from '../../api/cable/Cables';
import CableEdit from '../components/CableEdit';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders the EditStuff page for editing a single document. */
const EditCable = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { cable_id: cableId } = useParams();
  console.log('CableEdit', cableId);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Cables.collection.findOne(cableId);
    return {
      doc: document,
      ready: rdy,
    };
  }, [cableId]);
  return ready ? (
    CableEdit(cableId, doc)
  ) : <LoadingSpinner />;

};

export default EditCable;
