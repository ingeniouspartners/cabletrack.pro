import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { PageNotAuthorized } from '../../api/testcafe/TestCafe';

/** Render a Not Authorized page if the user enters a URL that is protected and the criteria is not met. */
const NotAuthorized = () => {
  const ready = true;
  return (
    <PageWrapper id={PageNotAuthorized} ready={ready}>
      <h2>Not Authorized</h2>
    </PageWrapper>
  );
};

export default NotAuthorized;
