import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import UserView from '../components/UserView';
import LoadingSpinner from '../components/LoadingSpinner';

/* Please replace the guts of this page with the right code. */
const ViewUser = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { userID } = useParams();
  console.log(userID);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to user's profile.
    const subscription = Meteor.subscribe('user.profile');
    // Determine is the subscription is ready.
    const rdy = subscription.ready();
    const document = Meteor.users.findOne({ _id: userID }, {});
    console.log(document);
    return {
      doc: document,
      ready: rdy,
    };
  }, [userID]);
  return (ready ? (
    <UserView user={doc} />
  ) : <LoadingSpinner />);
};

export default ViewUser;
