import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, PathViewCompany, PathEditCompany } from '../../api/navigation/Navigation';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CompanyListItem = ({ company }) => (
  <tr>
    <td>{company.name}</td>
    <td>
      <Link to={CombinePath(PathViewCompany, company)}><FileEarmarkFill /></Link>
    </td>
    <td>
      <Link to={CombinePath(PathEditCompany, company)}><PencilFill /></Link>
    </td>
  </tr>

);

// Require a document to be passed to this component. Theoretically only description and id are required.
CompanyListItem.propTypes = {
  company: PropTypes.instanceOf(PropTypeCompany).isRequired,
};

export default CompanyListItem;
