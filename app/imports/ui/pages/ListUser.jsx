import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Companies } from '../../api/company/Companies';
import UserList from '../components/UserList';
import PageWrapper from '../components/PageWrapper';
import { PageViewUser } from '../../api/testcafe/TestCafe';

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
    let userItems;
    let companyItem;
    if (companyID) {
      userItems = Meteor.users.find({ companyID: companyID }).fetch();
      companyItem = Companies.collection.findOne(companyID);
    } else userItems = Meteor.users.find({}).fetch();
    return {
      users: userItems,
      company: companyItem,
      ready: rdy,
    };
  }, []);
  return (
    <PageWrapper id={PageViewUser} ready={ready}>
      <UserList users={users} company={company} />
    </PageWrapper>
  );
};

export default ListUser;
