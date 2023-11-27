import React from 'react';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeUserProfile, PropTypeCompany } from '../../api/propTypes/PropTypes';
import { formatAddress } from '../../api/schema/FormSchemas';
import { CombinePath, ParamCompanyID, ParamUserID, PathEditUser, PathViewUser } from '../../api/navigation/Navigation';

/** Renders a single row in the List Users table. See pages/ListUsers.jsx. */
const UserListItem = ({ user, company }) => (
  <tr>
    <td>{user.firstName}&nbsp;{user.lastName}</td>
    <td>{formatAddress(user.address)}</td>
    <td>{user.email && user.email[0] ? user.email[0].address : ''}</td>
    <td>
      <Link aria-label="view" to={CombinePath(PathViewUser, { [ParamCompanyID]: company._id, [ParamUserID]: user._id })}><FileEarmarkFill /></Link>
    </td>
    <td>
      <Link aria-label="edit" to={CombinePath(PathEditUser, { [ParamCompanyID]: company._id, [ParamUserID]: user._id })}><PencilFill /></Link>
    </td>
  </tr>

);

// Require a document to be passed to this component. Theoretically only description and id are required.
UserListItem.propTypes = {
  user: PropTypeUserProfile.isRequired,
  company: PropTypeCompany.isRequired,
};

export default UserListItem;
