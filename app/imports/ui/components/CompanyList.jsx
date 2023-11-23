import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import CompanyListItem from './CompanyListItem';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, PathAddCompany } from '../../api/navigation/Navigation';

/* Renders a table containing all of the Company documents. Use <CableItem> to render each row. */
const CompanyList = ({ companies }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th colSpan="3"><h2>List Company</h2></th>
        <th><Link aria-label="add" to={CombinePath(PathAddCompany, {})}><FileEarmarkPlusFill /></Link></th>
      </tr>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>View</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      { companies ? (companies.map((company) => (<CompanyListItem company={company} key={company.id} />))) : '' }
    </tbody>
  </Table>
);

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(PropTypeCompany).isRequired,
};

export default CompanyList;
