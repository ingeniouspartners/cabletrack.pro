import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Project = ({ project }) => (
  <Card>
    <Card.Header>
      <Card.Title>{project.name}</Card.Title>
      <Card.Subtitle>{project.bidNumber}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{project.description}</Card.Text>
      <Link to={`/project/${project._id}`}><Button variant="primary">View Project</Button></Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Project.propTypes = {
  project: PropTypes.shape({
    companyID: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    contract: PropTypes.string,
    bidNumber: PropTypes.string,
    jobPhone: PropTypes.string,
    jobFax: PropTypes.string,
    mailAddress: PropTypes.string,
    mailAddress2: PropTypes.string,
    mailCity: PropTypes.string,
    mailState: PropTypes.string,
    mailZip: PropTypes.string,
    mailCountry: PropTypes.string,
    shipAddress: PropTypes.string,
    shipAddress2: PropTypes.string,
    shipCity: PropTypes.string,
    shipState: PropTypes.string,
    shipZip: PropTypes.string,
    shipCountry: PropTypes.string,
    formEmail: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Project;
