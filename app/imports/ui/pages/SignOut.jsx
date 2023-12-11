import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Navigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { PageNotFound } from '../../api/testcafe/TestCafe';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  const ready = true;
  return (
    <PageWrapper id={PageNotFound} ready={ready}>
      <h2>Not Found</h2>
      <Navigate to="/" />
    </PageWrapper>
  );
};

export default SignOut;
