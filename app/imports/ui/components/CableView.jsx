import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CombinePath, PathEditCable, ParamCompanyID, ParamProjectID, ParamCableID } from '../../api/navigation/Navigation';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { NavEditCable, PageViewCable } from '../../api/testcafe/TestCafe';

/* Renders the Cable document. */
const CableView = ({ cable }) => {
  const editPath = CombinePath(PathEditCable, { [ParamCompanyID]: cable.companyID, [ParamProjectID]: cable.projectID, [ParamCableID]: cable._id });
  return (
    <div id={PageViewCable}>
      <Card>
        <Card.Header as="h5">Cable</Card.Header>
        <Card.Body>
          <Card.Title>{cable.name}</Card.Title>
          <Table>
            <tbody>
              <tr><td className="strong">Description: </td><td>{cable.description}</td></tr>
              <tr><td className="strong">Cost Code: </td><td>{cable.costCode}</td></tr>
              <tr><td className="strong">Ref Drawing No: </td><td>{cable.refDrawingNo}</td></tr>
              <tr><td className="strong">Ref Drawing Rev: </td><td>{cable.refDrawingRev}</td></tr>
              <tr><td className="strong">System: </td><td>{cable.system}</td></tr>
              <tr><td className="strong">Building: </td><td>{cable.building}</td></tr>
              <tr><td className="strong">Zone: </td><td>{cable.zone}</td></tr>
              <tr><td className="strong">Origination: </td><td>{cable.origination}</td></tr>
              <tr><td className="strong">Termination: </td><td>{cable.termination}</td></tr>
              <tr><td className="strong">Length Planned: </td><td>{cable.lengthPlanned}</td></tr>
              <tr><td className="strong">Classification: </td><td>{cable.classification}</td></tr>
              <tr><td className="strong">Cable Type: </td><td>{cable.cableType}</td></tr>
              <tr><td className="strong">Conductors: </td><td>{cable.conductors}</td></tr>
              <tr><td className="strong">Voltage Cable: </td><td>{cable.voltageCable}</td></tr>
              <tr><td className="strong">Voltage Test: </td><td>{cable.voltageTest}</td></tr>
            </tbody>
          </Table>
          <Card.Text>{cable.notes}</Card.Text>
          <Card.Footer>
            <Link id={NavEditCable} to={editPath}><PencilFill /></Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

// Require a document to be passed to this component. Theoretically only description and id are required.
CableView.propTypes = {
  cable: PropTypeCable.isRequired,
};

export default CableView;
