import React from 'react';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeUserProfile } from '../../api/propTypes/PropTypes';
import { formatAddress, formatEmails } from '../../api/schema/FormSchemas';
import { CombinePath, ParamUserID, PathEditUser, PathViewUser } from '../../api/navigation/Navigation';

/** Renders a single row in the List Users table. See pages/ListUsers.jsx. */
const UserListItem = ({ user }) => (
  <tr>
    <td>{user.firstName}&nbsp;{user.lastName}</td>
    <td>{formatAddress(user.address)}</td>
    <td>{formatEmails(user.emails)}</td>
    <td>
      <Link aria-label="view" to={CombinePath(PathViewUser, { [ParamUserID]: user._id })}><FileEarmarkFill /></Link>
    </td>
    <td>
      <Link aria-label="edit" to={CombinePath(PathEditUser, { [ParamUserID]: user._id })}><PencilFill /></Link>
    </td>
  </tr>

);

// Require a document to be passed to this component. Theoretically only description and id are required.
UserListItem.propTypes = {
  user: PropTypeUserProfile.isRequired,
};

export default UserListItem;
