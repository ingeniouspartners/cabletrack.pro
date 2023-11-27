import React from 'react';
import { Meteor } from 'meteor/meteor';
import UserView from '../components/UserView';
// import { useParams } from 'react-router';
// import { useTracker } from 'meteor/react-meteor-data';
// import LoadingSpinner from '../components/LoadingSpinner';

/* Please replace the guts of this page with the right code. */
const ViewUser = () => {
  // // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const { user_id } = useParams();
  // // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  // const { doc, ready } = useTracker(() => {
  //   // Get access to User documents.
  //   const subscription = Meteor.subscribe(Meteor.users);
  //   // Determine is the subscription is ready.
  //   const rdy = subscription.ready();
  //   // Get the document.
  //   const document = UserProfiles.collection.findOne(user_id);
  //   return {
  //     doc: document,
  //     ready: rdy,
  //   };
  // }, [user_id]);
  // return (ready ? (
  //   <UserView user={doc} />
  // ) : <LoadingSpinner />);
  return (<UserView user={Meteor.user} />);
};

export default ViewUser;
