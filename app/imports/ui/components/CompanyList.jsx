import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import CompanyListItem from './CompanyListItem';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, PathAddCompany } from '../../api/navigation/Navigation';
import { NavAddCompany } from '../../api/testcafe/TestCafe';
import GuardedNavLink from './GuardedNavLink';
import { RoleAddCompany } from '../../api/role/Roles';

/* Renders a table containing all of the Company documents. Use <CableItem> to render each row. */
const CompanyList = ({ companies }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th colSpan="3"><h2>List Company</h2></th>
        <th>
          <GuardedNavLink id={NavAddCompany} user={Meteor.user()} roles={[RoleAddCompany]} aria-label="add" to={CombinePath(PathAddCompany, {})}>
            <FileEarmarkPlusFill />
          </GuardedNavLink>
        </th>
      </tr>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>View</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      { companies ? (companies.map((company) => (<CompanyListItem company={company} key={company._id} />))) : '' }
    </tbody>
  </Table>
);

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(PropTypeCompany).isRequired,
};

export default CompanyList;
