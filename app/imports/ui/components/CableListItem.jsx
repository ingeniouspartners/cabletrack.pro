import React from 'react';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { CombinePath, PathViewCable, PathEditCable } from '../../api/navigation/Navigation';
import { NavViewCable, NavEditCable } from '../../api/testcafe/TestCafe';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CableListItem = ({ cable }) => (
  <tr>
    <td>{cable.name}</td>
    <td>
      <Link id={NavViewCable} aria-label="view" to={CombinePath(PathViewCable, { companyID: cable.companyID, projectID: cable.projectID, cableID: cable._id })}><FileEarmarkFill /></Link>
    </td>
    <td>
      <Link id={NavEditCable} aria-label="edit" to={CombinePath(PathEditCable, { companyID: cable.companyID, projectID: cable.projectID, cableID: cable._id })}><PencilFill /></Link>
    </td>
  </tr>

);

// Require a document to be passed to this component. Theoretically only description and id are required.
CableListItem.propTypes = {
  cable: PropTypeCable.isRequired,
};

export default CableListItem;
