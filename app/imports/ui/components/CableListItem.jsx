import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CableListItem = ({ cable }) => (
  <tr>
    <td>{cable.description}</td>
    <td>
      <Link to={`/${cable._id}`}>View</Link>
    </td>
    <td>
      <Link to={`/${cable._id}/edit`}>Edit</Link>
    </td>
  </tr>

);

// Require a document to be passed to this component. Theoretically only description and id are required.
CableListItem.propTypes = {
  cable: PropTypes.shape({
    companyID: PropTypes.string.isRequired,
    projectID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    costCode: PropTypes.string,
    refDrawingNo: PropTypes.string,
    refDrawingRev: PropTypes.string,
    system: PropTypes.string,
    building: PropTypes.string,
    zone: PropTypes.string,
    origination: PropTypes.string,
    termination: PropTypes.string,
    lengthPlanned: PropTypes.number,
    classification: PropTypes.string,
    cableType: PropTypes.string,
    conductors: PropTypes.string,
    voltageCable: PropTypes.string,
    voltageTest: PropTypes.string,
    notes: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CableListItem;
