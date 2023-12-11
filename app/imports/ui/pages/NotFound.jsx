import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { PageNotFound } from '../../api/testcafe/TestCafe';

/** Render a Not Found page if the user enters a URL that is non-existent in the routing. */
const NotFound = () => {
  const ready = true;
  return (
    <PageWrapper id={PageNotFound} ready={ready}>
      <h2>Not Found</h2>
    </PageWrapper>
  );
};

export default NotFound;
