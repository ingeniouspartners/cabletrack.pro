import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { Companies } from '../../api/company/Companies';
import LoadingSpinner from '../components/LoadingSpinner';
import UserList from '../components/UserList';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const ListUser = () => {
  const { companyID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, users, company } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Companies.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Cable documents
    const userItems = Meteor.users.find({}).fetch();
    const companyItem = Companies.collection.findOne(companyID);
    return {
      users: userItems,
      company: companyItem,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3" fluid>
      <Row className="justify-content-center">
        <Col md={7}>
          <UserList users={users} company={company} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListUser;
