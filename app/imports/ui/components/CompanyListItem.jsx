import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, PathViewCompany, PathEditCompany, ParamCompanyID } from '../../api/navigation/Navigation';
import { formatAddress } from '../../api/schema/FormSchemas';
import { NavViewCompany, NavEditCompany } from '../../api/testcafe/TestCafe';
import GuardedNavLink from './GuardedNavLink';
import { RoleEditCompanyAll, RoleEditCompanyOwned, RoleViewCompanyAll, RoleViewCompanyOwned, RoleViewCompanyUsed } from '../../api/role/Roles';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CompanyListItem = ({ company }) => (
  <tr>
    <td><Link aria-label="view" to={CombinePath(PathViewCompany, { [ParamCompanyID]: company._id })}>{company.name}</Link></td>
    <td>{formatAddress(company.address)}</td>
    <td>
      <GuardedNavLink id={NavViewCompany} user={Meteor.user()} roles={[RoleViewCompanyAll, RoleViewCompanyOwned, RoleViewCompanyUsed]} aria-label="view" to={CombinePath(PathViewCompany, { [ParamCompanyID]: company._id })}>
        <FileEarmarkFill />
      </GuardedNavLink>
    </td>
    <td>
      <GuardedNavLink id={NavEditCompany} user={Meteor.user()} roles={[RoleEditCompanyAll, RoleEditCompanyOwned]} aria-label="edit" to={CombinePath(PathEditCompany, { [ParamCompanyID]: company._id })}>
        <PencilFill />
      </GuardedNavLink>
    </td>
  </tr>
);

// Require a document to be passed to this component. Theoretically only description and id are required.
CompanyListItem.propTypes = {
  company: PropTypeCompany.isRequired,
};

export default CompanyListItem;
