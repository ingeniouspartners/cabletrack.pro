import React from 'react';
import { Meteor } from 'meteor/meteor';
import UserEdit from '../components/UserEdit';

/* Please replace the guts of this page with the right code. */
const EditUser = () => {
  const user = Meteor.user();
  return (
    <UserEdit user={user} />
  );
};

export default EditUser;
