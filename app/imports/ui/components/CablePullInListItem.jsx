import React from 'react';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeCablePullIn } from '../../api/propTypes/PropTypes';
import { CombinePath, PathViewCablePullIn, PathEditCablePullIn, ParamCablePullInID, ParamCompanyID, ParamProjectID, ParamCableID } from '../../api/navigation/Navigation';
import { NavViewCablePullIn, NavEditCablePullIn } from '../../api/testcafe/TestCafe';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CablePullInListItem = ({ pullin }) => {
  const dateInstalled = pullin.dateInstalled ? pullin.dateInstalled.toDateString() : '';
  const viewPath = CombinePath(PathViewCablePullIn, { [ParamCompanyID]: pullin.companyID, [ParamProjectID]: pullin.projectID, [ParamCableID]: pullin.cableID, [ParamCablePullInID]: pullin._id });
  const editPath = CombinePath(PathEditCablePullIn, { [ParamCompanyID]: pullin.companyID, [ParamProjectID]: pullin.projectID, [ParamCableID]: pullin.cableID, [ParamCablePullInID]: pullin._id });
  return (
    <tr>
      <td>
        <Link aria-label="view" to={viewPath}>
          {pullin.personInstalled}
        </Link>
      </td>
      <td>{dateInstalled}</td>
      <td>{pullin.lengthInstalled}</td>
      <td>{pullin.pulledHand}</td>
      <td>{pullin.tugger}</td>
      <td>{pullin.tuggerCalibrationID}</td>
      <td>{pullin.maxPullingTension}</td>
      <td>
        <Link id={NavViewCablePullIn} aria-label="view" to={viewPath}><FileEarmarkFill /></Link>
      </td>
      <td>
        <Link id={NavEditCablePullIn} aria-label="edit" to={editPath}><PencilFill /></Link>
      </td>
    </tr>
  );
};

// Require a document to be passed to this component. Theoretically only description and id are required.
CablePullInListItem.propTypes = {
  pullin: PropTypeCablePullIn.isRequired,
};

export default CablePullInListItem;
