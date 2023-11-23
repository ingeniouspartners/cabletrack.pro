import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, PathViewCompany, PathEditCompany, ParamCompanyID } from '../../api/navigation/Navigation';
import { formatAddress } from '../../api/schema/Schemas';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CompanyListItem = ({ company }) => (
  <tr>
    <td><Link aria-label="view" to={CombinePath(PathViewCompany, { [ParamCompanyID]: company._id })}>{company.name}</Link></td>
    <td>{formatAddress(company.address)}</td>
    <td>
      <Link aria-label="view" to={CombinePath(PathViewCompany, { [ParamCompanyID]: company._id })}><FileEarmarkFill /></Link>
    </td>
    <td>
      <Link aria-label="edit" to={CombinePath(PathEditCompany, { [ParamCompanyID]: company._id })}><PencilFill /></Link>
    </td>
  </tr>

);

// Require a document to be passed to this component. Theoretically only description and id are required.
CompanyListItem.propTypes = {
  company: PropTypes.instanceOf(PropTypeCompany).isRequired,
};

export default CompanyListItem;
