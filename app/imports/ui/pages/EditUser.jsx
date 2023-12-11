import React from 'react';
import { Meteor } from 'meteor/meteor';
import UserEdit from '../components/UserEdit';
import PageWrapper from '../components/PageWrapper';

/* Please replace the guts of this page with the right code. */
const EditUser = () => {
  const user = Meteor.user();
  const ready = true;
  return (
    <PageWrapper ready={ready}>
      <UserEdit user={user} />
    </PageWrapper>
  );
};

export default EditUser;
