import React from 'react';
import { Meteor } from 'meteor/meteor';
import UserEdit from '../components/UserEdit';
import PageWrapper from '../components/PageWrapper';
import { PageEditUser } from '../../api/testcafe/TestCafe';

/* Please replace the guts of this page with the right code. */
const EditUser = () => {
  const user = Meteor.user();
  const ready = true;
  return (
    <PageWrapper id={PageEditUser} ready={ready}>
      <UserEdit user={user} />
    </PageWrapper>
  );
};

export default EditUser;
