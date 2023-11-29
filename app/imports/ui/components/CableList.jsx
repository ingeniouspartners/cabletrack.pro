import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import CableListItem from './CableListItem';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { CombinePath, ParamCompanyID, ParamProjectID, PathAddCable } from '../../api/navigation/Navigation';

/* Renders a table containing all of the Cable documents. Use <CableItem> to render each row. */
const CableList = ({ cables, companyID, projectID }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th colSpan="2"><h2>List Cable</h2></th>
        <th><Link aria-label="add" to={CombinePath(PathAddCable, { [ParamCompanyID]: companyID, [ParamProjectID]: projectID })}><FileEarmarkPlusFill /></Link></th>
      </tr>
      <tr>
        <th>Name</th>
        <th>View</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {cables ? (cables.map((cable) => (<CableListItem cable={cable} key={cable._id} />))) : '' }
    </tbody>
  </Table>
);

CableList.propTypes = {
  cables: PropTypes.arrayOf(PropTypeCable).isRequired,
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
};

export default CableList;
