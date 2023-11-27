import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import UserListItem from './UserListItem';
import { PropTypeUserProfile, PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, ParamCompanyID, PathAddUser } from '../../api/navigation/Navigation';

/* Renders a table containing all of the User documents. Use <CableItem> to render each row. */
const UserList = ({ users, company }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th colSpan="4"><h2>List {company.name} Users</h2></th>
        <th><Link aria-label="add" to={CombinePath(PathAddUser, { [ParamCompanyID]: company._id })}><FileEarmarkPlusFill /></Link></th>
      </tr>
      <tr>
        <td>Name</td>
        <td>Address</td>
        <td>Email</td>
        <th>View</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      { users ? (users.map((user) => (<UserListItem user={user} key={user._id} company={company} />))) : '' }
    </tbody>
  </Table>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypeUserProfile).isRequired,
  company: PropTypeCompany.isRequired,
};

export default UserList;
