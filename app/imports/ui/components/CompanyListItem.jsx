import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CompanyListItem = ({ company }) => (
  <tr>
    <td>{company.description}</td>
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
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    phone: PropTypes.string,
    fax: PropTypes.string,
    email: PropTypes.string,
    logoURL: PropTypes.string,
  }).isRequired,
};

export default CompanyListItem;
