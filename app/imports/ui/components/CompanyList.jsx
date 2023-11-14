import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Companies } from '../../api/company/Companies';
import CompanyListItem from './CompanyListItem';
import LoadingSpinner from './LoadingSpinner';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const CompanyList = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, companies } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const companyItems = Companies.collection.find({}).fetch();
    return {
      companies: companyItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3" fluid>
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List Cables</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>Description</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {companies.map((company) => <CompanyListItem key={company._id} company={company} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default CompanyList;
