import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { CombinePath, PathEditCable, ParamCompanyID, ParamProjectID, ParamCableID, PathListCable, PathListCablePullIn } from '../../api/navigation/Navigation';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { RoleEditCableAll, RoleEditCableOwned, RoleEditCableUsed, RoleListCableAll, RoleListCableOwned, RoleListCablePullInAll, RoleListCablePullInOwned, RoleListCablePullInUsed, RoleListCableUsed } from '../../api/role/Roles';
import { NavEditCable, NavListCable, NavListCablePullIn } from '../../api/testcafe/TestCafe';
import GuardedNavLink from './GuardedNavLink';

/* Renders the Cable document. */
const CableView = ({ cable }) => {
  const listPath = CombinePath(PathListCable, { [ParamCompanyID]: cable.companyID, [ParamProjectID]: cable.projectID });
  const editPath = CombinePath(PathEditCable, { [ParamCompanyID]: cable.companyID, [ParamProjectID]: cable.projectID, [ParamCableID]: cable._id });
  const pullInPath = CombinePath(PathListCablePullIn, { [ParamCompanyID]: cable.companyID, [ParamProjectID]: cable.projectID, [ParamCableID]: cable._id });
  return (
    <div>
      <Card>
        <Card.Header>
          <Row className="justify-content-center">
            <Col>
              <Row>
                <Col className="py-1"><h1>{cable.name}</h1><br /><p>{cable.description}</p></Col>
                <Col md={1} className="py-3"><GuardedNavLink roles={[RoleEditCableAll, RoleEditCableOwned, RoleEditCableUsed]} id={NavEditCable} aria-label="Edit" to={editPath}><PencilFill aria-label="Edit" /></GuardedNavLink></Col>
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
                <p className="mb-2">Cost Code: {cable.costCode}</p>
                <p className="mb-2">Ref Drawing No: {cable.refDrawingNo}</p>
                <p className="mb-2">Ref Drawing Rev: {cable.refDrawingRev}</p>
                <p className="mb-2">System: {cable.system}</p>
                <p className="mb-2">Building: {cable.building}</p>
                <p className="mb-2">Zone: {cable.zone}</p>
                <p className="mb-2">Origination: {cable.origination}</p>
                <p className="mb-2">Termination: {cable.termination}</p>
              </Col>
              <Col className="mb-2">
                <p className="mb-2">Length Planned: {cable.lengthPlanned}</p>
                <p className="mb-2">Classification: {cable.classification}</p>
                <p className="mb-2">Cable Type: {cable.cableType}</p>
                <p className="mb-2">Conductors: {cable.conductors}</p>
                <p className="mb-2">Voltage Cable: {cable.voltageCable}</p>
                <p className="mb-2">Voltage Test: {cable.voltageTest}</p>
              </Col>
            </Row>
          </Container>
        </ListGroup>
        <Container>
          <Row className="py-2">
            <h4>Notes:</h4>
            <p>{cable.notes}</p>
          </Row>
        </Container>
        <Card.Footer>
          <Row className="justify-content-center">
            <Col className="text-center">
              <GuardedNavLink roles={[RoleListCableAll, RoleListCableOwned, RoleListCableUsed]} id={NavListCable} to={listPath}><span className="px-2">Cables</span></GuardedNavLink>
              <GuardedNavLink roles={[RoleListCablePullInAll, RoleListCablePullInOwned, RoleListCablePullInUsed]} id={NavListCablePullIn} to={pullInPath}><span className="px-2">Pull Ins</span></GuardedNavLink>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

// Require a document to be passed to this component. Theoretically only description and id are required.
CableView.propTypes = {
  cable: PropTypeCable.isRequired,
};

export default CableView;
