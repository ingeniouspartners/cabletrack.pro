import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CompanyViewItem = ({ company }) => (
  <tr>
    <td>{company.name}</td>
    <td>{company.address}</td>
    <td>{company.zip}</td>
    <td>{company.phone}</td>
    <td>{company.email}</td>
    <td>
      <Link to={`/${company._id}/edit`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component. Theoretically only description and id are required.
CompanyViewItem.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
    phone: PropTypes.string,
    fax: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default CompanyViewItem;
