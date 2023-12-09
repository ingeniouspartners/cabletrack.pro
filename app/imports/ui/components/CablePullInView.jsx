import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { CombinePath, PathEditCablePullIn } from '../../api/navigation/Navigation';
import { PropTypeCable, PropTypeCablePullIn, PropTypeProject } from '../../api/propTypes/PropTypes';
import { PageViewCablePullIn, NavEditCablePullIn } from '../../api/testcafe/TestCafe';

const CablePullInViewTugger = ({ cablePullIn }) => {
  if (cablePullIn.pulledHand) {
    return (
      <tr><td className="strong">Pulled By</td><td>Hand</td></tr>
    );
  }
  return (
    <Container fluid>
      <tr><td className="strong">Tugged By</td><td>{cablePullIn.tugger}</td></tr>
      <tr><td className="strong">Calibration ID</td><td>{cablePullIn.calibrationId}</td></tr>
      <tr><td className="strong">Max Pulling Tension</td><td>{cablePullIn.maxPullingTension}</td></tr>
    </Container>
  );
};

CablePullInViewTugger.propTypes = {
  cablePullIn: PropTypeCablePullIn.isRequired,
};

const CablePullInView = ({ cablePullIn, cable, project }) => {
  const dateInstalled = cablePullIn.dateInstalled.toDateString();
  const editPath = CombinePath(PathEditCablePullIn, cablePullIn);
  return (
    <Card id={PageViewCablePullIn}>
      <Card.Header as="h5">Cable Pull In</Card.Header>
      <Card.Body>
        <Card.Title>{cable.name}</Card.Title>
        <Card.Subtitle>{project.name}</Card.Subtitle>
        <Card.Text>
          <table>
            <tr><td className="strong">Installed By</td><td>{cablePullIn.personInstalled}</td></tr>
            <tr><td className="strong">Installed Date</td><td>{dateInstalled}</td></tr>
            <tr><td className="strong">Installed Length</td><td>{cablePullIn.lengthInstalled}</td></tr>
            <CablePullInViewTugger cablePullIn={cablePullIn} />
          </table>
        </Card.Text>
        <Card.Text>{cablePullIn.notes}</Card.Text>
        <Card.Footer>
          <Link id={NavEditCablePullIn} to={editPath}><PencilFill /></Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

CablePullInView.propTypes = {
  cablePullIn: PropTypeCablePullIn.isRequired,
  cable: PropTypeCable.isRequired,
  project: PropTypeProject.isRequired,
};

export default CablePullInView;
