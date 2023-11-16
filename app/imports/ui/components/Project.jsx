import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as CTPNav from '../../api/navigation/Navigation';
import { ParamProjectID } from '../../api/navigation/Navigation';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Project = ({ project }) => (
  <Card>
    <Card.Header>
      <Card.Title>{project.name}</Card.Title>
      <Card.Subtitle>{project.bidNumber}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{project.contract}</Card.Text>
      <Link to={CTPNav.PathViewProject.replace(`:${ParamProjectID}`, project._id)}><Button variant="primary">View Project</Button></Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Project.propTypes = {
  project: PropTypes.shape({
    companyID: PropTypes.string,
    code: PropTypes.string,
    name: PropTypes.string,
    contract: PropTypes.string,
    bidNumber: PropTypes.string,
    mailAddress: PropTypes.shape({
      address: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      country: PropTypes.string,
    }),
    shipAddress: PropTypes.shape({
      address: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      country: PropTypes.string,
    }),
    jobPhone: PropTypes.string,
    jobFax: PropTypes.string,
    jobEmail: PropTypes.string,
    notes: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Project;
