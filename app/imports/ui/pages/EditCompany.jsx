import React from 'react';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Companies } from '../../api/company/Companies';
import CompanyEdit from '../components/CompanyEdit';
import LoadingSpinner from '../components/LoadingSpinner';

/* Please replace the guts of this page with the right code. */
const EditCompany = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { company_id: companyId } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { com, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const company = Companies.collection.findOne(companyId);
    return {
      com: company,
      ready: rdy,
    };
  }, [companyId]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  return (ready ? <CompanyEdit key={com._id} company={com} /> : <LoadingSpinner />);
};
export default EditCompany;
