import React from 'react';
import { Container } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page">
    <h1 className="text-center">About the app</h1>
    <h3 className="text-center my-3">Purpose</h3>
    <p>CableTrack PRO is the premier tool to enable electricians to quickly and easily create cable schedules for their projects. It allows the tracking of the cable meta-data, pull-ins, terminations, and tests.</p>
    <h3 className="text-center my-3">Features we provide</h3>
    <h4>***Company Branding***</h4>
    <p>CableTrack PRO allows you to brand the application with your company logo. This allows the customer to present a professional image to their clients.</p>
    <h4>***Projects***</h4>
    <p>CableTrack PRO allows you to create projects and add cables to them. You can then report progress by project.</p>
    <h4>***Cables***</h4>
    <p>CableTrack PRO allows you to create cables and add them to projects. You can then track the progress of each cable.</p>
  </Container>
);

export default Landing;
