import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import UserView from '../components/UserView';
import PageWrapper from '../components/PageWrapper';
import { PageViewUser } from '../../api/testcafe/TestCafe';

const ViewUser = () => {
  // Get the userID from the URL field. See imports/ui/layouts/App.jsx for the route containing :userID.
  const { userID } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { user, ready } = useTracker(() => {
    // Get access to user's profile.
    const subscription = Meteor.subscribe('user.profile');
    // Determine is the subscription is ready.
    const rdy = subscription.ready();
    const userItem = Meteor.users.findOne({ _id: userID }, {});
    return {
      user: userItem,
      ready: rdy,
    };
  }, [userID]);
  return (
    <PageWrapper id={PageViewUser} ready={ready}>
      <UserView user={user} />
    </PageWrapper>
  );
};

export default ViewUser;
