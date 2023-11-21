import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Companies } from '../../api/company/Companies';
import CompanyView from '../components/CompanyView';
import LoadingSpinner from '../components/LoadingSpinner';

/* Please replace the guts of this page with the right code. */
const ViewCompany = () => {
  const { _id } = useParams();
  console.log('CableView', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Companies.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  return (ready ? <CompanyView key={doc._id} company={doc} /> : <LoadingSpinner />);
};

export default ViewCompany;
