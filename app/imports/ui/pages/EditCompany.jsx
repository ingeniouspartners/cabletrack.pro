import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, useLocation } from 'react-router';
import { Companies } from '../../api/company/Companies';
import CompanyEdit from '../components/CompanyEdit';
import PageWrapper from '../components/PageWrapper';
import { PageEditCompany } from '../../api/testcafe/TestCafe';

/* Please replace the guts of this page with the right code. */
const EditCompany = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { companyID } = useParams();
  const location = useLocation();
  // console.log('EditCompany', companyID);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { company, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Companies.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    let companyItem;
    if (location.pathname.endsWith('/add')) {
      companyItem = { _id: '', name: '', address: { address: '', city: '', state: '', zip: '' }, phone: '', fax: '', email: '', logoURL: '' };
    } else {
      companyItem = Companies.collection.findOne(companyID);
    }
    return {
      company: companyItem,
      ready: rdy,
    };
  }, [companyID, location]);
  return (
    <PageWrapper id={PageEditCompany} ready={ready}>
      <CompanyEdit company={company} />
    </PageWrapper>
  );
};
export default EditCompany;
