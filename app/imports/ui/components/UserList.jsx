import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import UserListItem from './UserListItem';
import { PropTypeUserProfile, PropTypeCompany } from '../../api/propTypes/PropTypes';
import { PathAddUser } from '../../api/navigation/Navigation';

/* Renders a table containing all of the User documents. Use <CableItem> to render each row. */
const UserList = ({ users, company }) => {
  const title = company ? `List ${company.name} Users` : 'List All Users';

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="4"><h2>{title}</h2></th>
          <th><Link aria-label="add" to={PathAddUser}><FileEarmarkPlusFill /></Link></th>
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
        {users ? (users.map((user) => (<UserListItem key={user._id} user={user} />))) : ''}
      </tbody>
    </Table>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypeUserProfile).isRequired,
  company: PropTypeCompany,
};

UserList.defaultProps = {
  company: { _id: '', name: 'CableTrack PRO', logoURL: '/images/logo.png' },
};

export default UserList;
