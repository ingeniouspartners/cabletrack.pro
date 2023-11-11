import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Project = ({ project }) => (
  <Card>
    <Card.Header>
      <Card.Title>{project.name}</Card.Title>
      <Card.Subtitle>{project.code}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{project.associatedUsers}</Card.Text>
      <Link to={`/view/${project._id}`}><Button variant="primary">View Project</Button></Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Project.propTypes = {
  project: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    associatedUsers: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Project;
