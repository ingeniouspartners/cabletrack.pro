import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CompanyListItem = ({ company }) => (
  <tr>
    <td>{company.name}</td>
    <td>
      <Link to={`/${company._id}`}>View</Link>
    </td>
    <td>
      <Link to={`/${company._id}/edit`}>Edit</Link>
    </td>
  </tr>

);

// Require a document to be passed to this component. Theoretically only description and id are required.
CompanyListItem.propTypes = {
  company: PropTypes.instanceOf(PropTypeCompany).isRequired,
};

export default CompanyListItem;
