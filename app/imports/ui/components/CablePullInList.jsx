import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import CablePullInListItem from './CablePullInListItem';
import { PropTypeCablePullIn } from '../../api/propTypes/PropTypes';
import { CombinePath, ParamCableID, ParamCompanyID, ParamProjectID, PathAddCablePullIn } from '../../api/navigation/Navigation';
import { NavAddCablePullIn, PageListCablePullIn } from '../../api/testcafe/TestCafe';
import GuardedNavLink from './GuardedNavLink';
import { RoleAddCablePullIn } from '../../api/role/Roles';

/* Renders a table containing all of the CablePullIn documents. Use <CableItem> to render each row. */
const CablePullInList = ({ pullins, companyID, projectID, cableID }) => {
  const addPath = CombinePath(PathAddCablePullIn, { [ParamCompanyID]: companyID, [ParamProjectID]: projectID, [ParamCableID]: cableID });
  return (
    <Table id={PageListCablePullIn} striped bordered hover>
      <thead>
        <tr>
          <th colSpan="8"><h2>List Cable PullIn</h2></th>
          <th><GuardedNavLink id={NavAddCablePullIn} roles={[RoleAddCablePullIn]} aria-label="add" to={addPath}><FileEarmarkPlusFill /></GuardedNavLink></th>
        </tr>
        <tr>
          <td>Installed By</td>
          <td>Date</td>
          <td>Length</td>
          <td>Pulled By Hand</td>
          <td>Tugger</td>
          <td>Calibration ID</td>
          <td>MAX Pulling Tension</td>
          <th>View</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        { pullins ? (pullins.map((pullin) => (<CablePullInListItem pullin={pullin} key={pullin._id} />))) : '' }
      </tbody>
    </Table>
  );
};

CablePullInList.propTypes = {
  pullins: PropTypes.arrayOf(PropTypeCablePullIn).isRequired,
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  cableID: PropTypes.string.isRequired,
};

export default CablePullInList;
