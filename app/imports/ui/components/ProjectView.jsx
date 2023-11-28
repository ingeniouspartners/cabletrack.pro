import React from 'react';
import { Button, Col, Row, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PathEditProject, CombinePath, ParamCompanyID, ParamProjectID } from '../../api/navigation/Navigation';
import { PropTypeCompany, PropTypeProject } from '../../api/propTypes/PropTypes';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const ProjectView = ({ project, company }) => {
  const editPath = CombinePath(PathEditProject, { [ParamCompanyID]: company._id, [ParamProjectID]: project._id });
  return (
    <Container className="py-3">
      <Card>
        <Row className="justify-content-center">
          <Col className="text-center">
            <Row>
              <Col> </Col>
              <Col><h1>{project.name}</h1></Col>
              <Col><Link id="edit-project-page" to={editPath}><Button variant="primary">Edit</Button></Link></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 mb-3">
            <h5>Code: {project.code}</h5>
            <h5>Contract: {project.contract}</h5>
            <h5>Bid Number: {project.bidNumber}</h5>
          </Col>
          <Col className="mt-3 mb-3">
            <h5>Phone #: {project.jobPhone}</h5>
            <h5>Fax #: {project.jobFax}</h5>
            <h5>Email: {project.jobEmail}</h5>
          </Col>
        </Row>
        <Row>
          <Col><h4>Mail Address</h4></Col>
          <Col><h4>Ship Address</h4></Col>
        </Row>
        <Row>
          <Col className="mt-2 mb-3">
            <h5>Address: {project.mailAddress.address}</h5>
            <h5>Address 2: {project.mailAddress.address2}</h5>
            <h5>City: {project.mailAddress.city}</h5>
          </Col>
          <Col className="mt-1 mb-3">
            <h5>State: {project.mailAddress.state}</h5>
            <h5>Zip: {project.mailAddress.zip}</h5>
            <h5>Country: {project.mailAddress.country}</h5>
          </Col>
          <Col className="mt-2 mb-3">
            <h5>Address: {project.shipAddress.address}</h5>
            <h5>Address 2: {project.shipAddress.address2}</h5>
            <h5>City: {project.shipAddress.city}</h5>
          </Col>
          <Col className="mt-1 mb-3">
            <h5>State: {project.shipAddress.state}</h5>
            <h5>Zip: {project.shipAddress.zip}</h5>
            <h5>Country: {project.shipAddress.country}</h5>
          </Col>
        </Row>
        <h4>Notes:</h4>
        <h5>{project.notes}</h5>
      </Card>

    </Container>
  );
};

ProjectView.propTypes = {
  // eslint-disable-next-line react/require-default-props
  project: PropTypeProject.isRequired,
  company: PropTypeCompany.isRequired,
};

export default ProjectView;
