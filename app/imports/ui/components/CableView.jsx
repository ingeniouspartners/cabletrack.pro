import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CombinePath, PathEditCable } from '../../api/navigation/Navigation';
import { PropTypeCable, PropTypeProject } from '../../api/propTypes/PropTypes';

/* Renders the Cable document. */
const CableView = ({ cable, project }) => {
  const editPath = CombinePath(PathEditCable, cable);
  return (
    <Card>
      <Card.Header as="h5">Cable</Card.Header>
      <Card.Body>
        <Card.Title>{cable.name}</Card.Title>
        <Card.Subtitle>{project.name}</Card.Subtitle>
        <Table>
          <tbody>
            <tr><td className="strong">Description: {cable.description}</td></tr>
            <tr><td className="strong">Cost Code: {cable.costCode}</td></tr>
            <tr><td className="strong">Ref Drawing No: {cable.refDrawingNo}</td></tr>
            <tr><td className="strong">Ref Drawing Rev: {cable.refDrawingRev}</td></tr>
            <tr><td className="strong">System: {cable.system}</td></tr>
            <tr><td className="strong">Building: {cable.building}</td></tr>
            <tr><td className="strong">Zone: {cable.zone}</td></tr>
            <tr><td className="strong">Origination: {cable.origination}</td></tr>
            <tr><td className="strong">Termination: {cable.termination}</td></tr>
            <tr><td className="strong">Length Planned: {cable.lengthPlanned}</td></tr>
            <tr><td className="strong">Classification: {cable.classification}</td></tr>
            <tr><td className="strong">Cable Type: {cable.cableType}</td></tr>
            <tr><td className="strong">Conductors: {cable.conductors}</td></tr>
            <tr><td className="strong">Voltage Cable: {cable.voltageCable}</td></tr>
            <tr><td className="strong">Voltage Test: {cable.voltageTest}</td></tr>
          </tbody>
        </Table>
        <Card.Text>{cable.notes}</Card.Text>
        <Card.Footer>
          <Link to={editPath}><PencilFill /></Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component. Theoretically only description and id are required.
CableView.propTypes = {
  cable: PropTypeCable.isRequired,
  project: PropTypeProject.isRequired,
};

export default CableView;
