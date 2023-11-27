import React from 'react';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeCablePullIn } from '../../api/propTypes/PropTypes';
import { CombinePath, PathViewCablePullIn, PathEditCablePullIn, ParamCablePullInID, ParamCompanyID, ParamProjectID, ParamCableID } from '../../api/navigation/Navigation';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CablePullInListItem = ({ pullin }) => (
  <tr>
    <td><Link aria-label="view" to={CombinePath(PathViewCablePullIn, { [ParamCompanyID]: pullin.companyID, [ParamProjectID]: pullin.projectID, [ParamCableID]: pullin.cableID, [ParamCablePullInID]: pullin._id })}>{pullin.personInstalled}</Link></td>
    <td>{pullin.dateInstalled.toISOString().substring(0, 10)}</td>
    <td>{pullin.lengthInstalled}</td>
    <td>{pullin.pulledHand}</td>
    <td>{pullin.tugger}</td>
    <td>{pullin.tuggerCalibrationID}</td>
    <td>{pullin.maxPullingTension}</td>
    <td>
      <Link aria-label="view" to={CombinePath(PathViewCablePullIn, { [ParamCompanyID]: pullin.companyID, [ParamProjectID]: pullin.projectID, [ParamCableID]: pullin.cableID, [ParamCablePullInID]: pullin._id })}><FileEarmarkFill /></Link>
    </td>
    <td>
      <Link aria-label="edit" to={CombinePath(PathEditCablePullIn, { [ParamCompanyID]: pullin.companyID, [ParamProjectID]: pullin.projectID, [ParamCableID]: pullin.cableID, [ParamCablePullInID]: pullin._id })}><PencilFill /></Link>
    </td>
  </tr>
);

// Require a document to be passed to this component. Theoretically only description and id are required.
CablePullInListItem.propTypes = {
  pullin: PropTypeCablePullIn.isRequired,
};

export default CablePullInListItem;
