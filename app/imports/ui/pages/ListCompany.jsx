import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Companies } from '../../api/company/Companies';
import LoadingSpinner from '../components/LoadingSpinner';
import CompanyList from '../components/CompanyList';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const ListCompany = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, companies } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Companies.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const companyItems = Companies.collection.find({}).fetch();
    return {
      companies: companyItems,
      ready: rdy,
    };
  }, []);
  return (ready ? <CompanyList companies={companies} /> : <LoadingSpinner />);
};

export default ListCompany;
