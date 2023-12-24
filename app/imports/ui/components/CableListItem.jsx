import React from 'react';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import GuardedNavLink from './GuardedNavLink';
import { CombinePath, ParamCableID, ParamCompanyID, ParamProjectID, PathEditCable, PathViewCable } from '../../api/navigation/Navigation';
import { NavEditCable, NavViewCable } from '../../api/testcafe/TestCafe';
import { RoleEditCableAll, RoleEditCableOwned, RoleEditCableUsed, RoleViewCableAll, RoleViewCableOwned, RoleViewCableUsed } from '../../api/role/Roles';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CableListItem = ({ cable }) => {
  const viewLink = CombinePath(PathViewCable, { [ParamCompanyID]: cable.companyID, [ParamProjectID]: cable.projectID, [ParamCableID]: cable._id });
  const editLink = CombinePath(PathEditCable, { [ParamCompanyID]: cable.companyID, [ParamProjectID]: cable.projectID, [ParamCableID]: cable._id });
  return (
    <tr>
      <td>{cable.name}</td>
      <td>{cable.description}</td>
      <td>
        <GuardedNavLink roles={[RoleViewCableAll, RoleViewCableOwned, RoleViewCableUsed]} id={NavViewCable} aria-label="View" to={viewLink}><FileEarmarkFill aria-label="View" /></GuardedNavLink>
      </td>
      <td>
        <GuardedNavLink roles={[RoleEditCableAll, RoleEditCableOwned, RoleEditCableUsed]} id={NavEditCable} aria-label="Edit" to={editLink}><PencilFill aria-label="Edit" /></GuardedNavLink>
      </td>
    </tr>
  );
};

// Require a document to be passed to this component. Theoretically only description and id are required.
CableListItem.propTypes = {
  cable: PropTypeCable.isRequired,
};

export default CableListItem;
