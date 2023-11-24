import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Companies } from '../../api/company/Companies';
import CompanyView from '../components/CompanyView';
import LoadingSpinner from '../components/LoadingSpinner';
import { Col, Container, Row } from 'react-bootstrap';
import CompanyEdit from '../components/CompanyEdit';

/* Please replace the guts of this page with the right code. */
const ViewCompany = () => {
  const { companyID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Cable documents.
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
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <CompanyView company={doc} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ViewCompany;
