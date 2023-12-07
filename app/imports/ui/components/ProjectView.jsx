import React from 'react';
import { Col, Row, Container, Card, ListGroup } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { PathEditProject, PathListCable, CombinePath, ParamCompanyID, ParamProjectID } from '../../api/navigation/Navigation';
import { PropTypeProject } from '../../api/propTypes/PropTypes';
import { PageViewProject, NavEditProject, NavListCable } from '../../api/testcafe/TestCafe';
import { formatAddress } from '../../api/schema/FormSchemas';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const ProjectView = ({ project }) => {
  const editPath = CombinePath(PathEditProject, { [ParamCompanyID]: project.companyID, [ParamProjectID]: project._id });
  const cablesPath = CombinePath(PathListCable, { [ParamCompanyID]: project.companyID, [ParamProjectID]: project._id });
  return (
    <Container id={PageViewProject} className="py-3">
      <Card>
        <Card.Header>
          <Row className="justify-content-center">
            <Col className="text-center">
              <Row>
                <Col><h1>{project.name}</h1></Col>
                <Col className="py-2"><Link id={NavEditProject} to={editPath}><PencilFill /></Link></Col>
              </Row>
            </Col>
          </Row>
        </Card.Header>
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
              <Col className="vertical-line">{formatAddress(project.mailAddress)}</Col>
              <Col>{formatAddress(project.shipAddress)}</Col>
            </Row>
          </Container>
        </ListGroup>
        <Container>
          <Row className="py-2">
            <h4>Notes:</h4>
            <p>{project.notes}</p>
          </Row>
        </Container>
        <Card.Footer>
          <Row className="justify-content-center">
            <Col className="text-center">
              <Link id={NavListCable} to={cablesPath}>Cables</Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>

    </Container>
  );
};

ProjectView.propTypes = {
  project: PropTypeProject.isRequired,
};

export default ProjectView;
