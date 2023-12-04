import React from 'react';
import { Col, Row, Container, Card, CardHeader, ListGroup } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { PathEditProject, CombinePath, ParamCompanyID, ParamProjectID } from '../../api/navigation/Navigation';
import { PropTypeCompany, PropTypeProject } from '../../api/propTypes/PropTypes';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const ProjectView = ({ project, company }) => {
  const editPath = CombinePath(PathEditProject, { [ParamCompanyID]: company._id, [ParamProjectID]: project._id });
  return (
    <Container id="view-project-page" className="py-3">
      <Card>
        <CardHeader>
          <Row className="justify-content-center">
            <Col className="text-center">
              <Row>
                <Col> </Col>
                <Col><h1>{project.name}</h1></Col>
                <Col className="py-2"><Link id="edit-project-page" to={editPath}><PencilFill /></Link></Col>
              </Row>
            </Col>
          </Row>
        </CardHeader>
        <ListGroup>
          <Container>
            <Row className="mt-2">
              <h3><strong>Details</strong></h3>
            </Row>
            <Row>
              <Col className="mb-2">
                <p className="mb-2">Code: {project.code}</p>
                <p className="mb-2">Contract: {project.contract}</p>
                <p className="mb-2">Bid Number: {project.bidNumber}</p>
              </Col>
              <Col className="mb-2">
                <p className="mb-2">Phone #: {project.jobPhone}</p>
                <p className="mb-2">Fax #: {project.jobFax}</p>
                <p className="mb-2">Email: {project.jobEmail}</p>
              </Col>
            </Row>
          </Container>
        </ListGroup>
        <ListGroup>
          <Container className="py-2">
            <Row className="">
              <Col className="vertical-line"><h4><strong>Mail Address</strong></h4></Col>
              <Col><h4><strong>Ship Address</strong></h4></Col>
            </Row>
            <Row>
              <Col className="vertical-line">
                <p>Address: {project.mailAddress.address}</p>
                <p>Address 2: {project.mailAddress.address2}</p>
                <p>City: {project.mailAddress.city}</p>
              </Col>

              <Col className="mt-2">
                <p>Address: {project.shipAddress.address}</p>
                <p>Address 2: {project.shipAddress.address2}</p>
                <p>City: {project.shipAddress.city}</p>
              </Col>
            </Row>
            <Row>
              <Col className="vertical-line">
                <Row>
                  <Col><p>State: {project.mailAddress.state}</p></Col>
                  <Col><p>Zip: {project.mailAddress.zip}</p></Col>
                  <Col><p>Country: {project.mailAddress.country}</p></Col>
                </Row>
              </Col>

              <Col>
                <Row>
                  <Col><p>State: {project.shipAddress.state}</p></Col>
                  <Col><p>Zip: {project.shipAddress.zip}</p></Col>
                  <Col><p>Country: {project.shipAddress.country}</p></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </ListGroup>
        <Container>
          <Row className="py-2">
            <h4>Notes:</h4>
            <p>{project.notes}</p>
          </Row>
        </Container>
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
