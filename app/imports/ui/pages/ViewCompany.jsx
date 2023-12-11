import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Row } from 'react-bootstrap';
import { Companies } from '../../api/company/Companies';
import CompanyView from '../components/CompanyView';
import PageWrapper from '../components/PageWrapper';

/* Please replace the guts of this page with the right code. */
const ViewCompany = () => {
  const { companyID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Company documents.
    const subscription = Meteor.subscribe(Companies.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Companies.collection.findOne(companyID);
    return {
      doc: document,
      ready: rdy,
    };
  }, [companyID]);
  return (
    <PageWrapper ready={ready} id="view-company-page">
      <Row className="justify-content-center">
        <CompanyView company={doc} />
      </Row>
    </PageWrapper>
  );
};

export default ViewCompany;
