import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Project from './Project';
import * as CTPNav from '../../api/navigation/Navigation';

const ProjectList = ({ projects }) => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col md={7}>
        <Col className="text-center">
          <Row>
            <Col> </Col>
            <Col><h2>Projects</h2></Col>
            <Col><Link id="add-project-page" to={CTPNav.PathAddProject}><Button variant="primary">Add Project</Button></Link></Col>
          </Row>
        </Col>
        <Row>
          {projects.map((project) => (<Row className="p-3" key={project._id}><Project project={project} /></Row>))}
        </Row>
      </Col>
    </Row>
  </Container>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default ProjectList;
