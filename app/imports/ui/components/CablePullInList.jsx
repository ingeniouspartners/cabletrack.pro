import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import CablePullInListItem from './CablePullInListItem';
import { PropTypeCablePullIn } from '../../api/propTypes/PropTypes';
import { CombinePath, ParamCableID, ParamCompanyID, ParamProjectID, PathAddCablePullIn } from '../../api/navigation/Navigation';

/* Renders a table containing all of the CablePullIn documents. Use <CableItem> to render each row. */
const CablePullInList = ({ pullins, companyID, projectID, cableID }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th colSpan="8"><h2>List Cable PullIn</h2></th>
        <th><Link aria-label="add" to={CombinePath(PathAddCablePullIn, { [ParamCompanyID]: companyID, [ParamProjectID]: projectID, [ParamCableID]: cableID })}><FileEarmarkPlusFill /></Link></th>
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

CablePullInList.propTypes = {
  pullins: PropTypes.arrayOf(PropTypeCablePullIn).isRequired,
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  cableID: PropTypes.string.isRequired,
};

export default CablePullInList;
