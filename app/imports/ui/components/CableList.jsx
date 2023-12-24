import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import CableListItem from './CableListItem';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { CombinePath, ParamCompanyID, ParamProjectID, PathAddCable } from '../../api/navigation/Navigation';
import { NavAddCable } from '../../api/testcafe/TestCafe';
import GuardedNavLink from './GuardedNavLink';
import { RoleAddCable } from '../../api/role/Roles';

/**
 * Renders the Cable List table.
 * @param cables
 * @param companyID
 * @param projectID
 * @returns {Element}
 * @constructor
 */
const CableList = ({ cables, companyID, projectID }) => {
  const addPath = CombinePath(PathAddCable, { [ParamCompanyID]: companyID, [ParamProjectID]: projectID });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="3"><h2>List Cable</h2></th>
          <th><GuardedNavLink roles={[RoleAddCable]} id={NavAddCable} to={addPath} aria-label="Add"><FileEarmarkPlusFill aria-label="Add" /></GuardedNavLink></th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>View</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {cables ? (cables.map((cable) => (<CableListItem key={cable._id} cable={cable} />))) : ''}
      </tbody>
    </Table>
  );
};

CableList.propTypes = {
  cables: PropTypes.arrayOf(PropTypeCable).isRequired,
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
};

export default CableList;
