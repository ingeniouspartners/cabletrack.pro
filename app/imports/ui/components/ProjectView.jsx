import React from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as CTPNav from '../../api/navigation/Navigation';
import { ParamProjectID } from '../../api/navigation/Navigation';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const ProjectView = ({ project }) => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col className="text-center">
        <Row>
          <Col> </Col>
          <Col><h2>{project.name}</h2></Col>
          <Col><Link to={CTPNav.PathEditProject.replace(`:${ParamProjectID}`, project._id)}><Button variant="primary">Edit</Button></Link></Col>
        </Row>
        <h5>{project.code}</h5>
      </Col>
      <h5>{project.contract}</h5>
      <h5>{project.bidNumber}</h5>
      <h5>{project.jobPhone}</h5>
      <h5>{project.jobFax}</h5>
      <h5>{project.jobEmail}</h5>
      <h5>{project.notes}</h5>
      <h1> Mail Address </h1>
      <h5>{project.mailAddress.address}</h5>
      <h5>{project.mailAddress.address2}</h5>
      <h5>{project.mailAddress.city}</h5>
      <h5>{project.mailAddress.state}</h5>
      <h5>{project.mailAddress.zip}</h5>
      <h5>{project.mailAddress.country}</h5>
      <h1> Ship Address </h1>
      <h5>{project.shipAddress.address}</h5>
      <h5>{project.shipAddress.address2}</h5>
      <h5>{project.shipAddress.city}</h5>
      <h5>{project.shipAddress.state}</h5>
      <h5>{project.shipAddress.zip}</h5>
      <h5>{project.shipAddress.country}</h5>
    </Row>
  </Container>
);

ProjectView.propTypes = {
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

export default ProjectView;
