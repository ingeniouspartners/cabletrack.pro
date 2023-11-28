import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PropTypeProject } from '../../api/propTypes/PropTypes';
import { CombinePath, PathViewProject } from '../../api/navigation/Navigation';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Project = ({ project }) => (
  <Card>
    <Card.Header>
      <Card.Title>{project.name}</Card.Title>
      <Card.Subtitle>{project.bidNumber}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{project.contract}</Card.Text>
      <Link id="view-project-page" to={CombinePath(PathViewProject, { companyID: project.companyID, projectID: project._id })}><Button variant="primary">View Project</Button></Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Project.propTypes = {
  project: PropTypeProject.isRequired,
};

export default Project;
