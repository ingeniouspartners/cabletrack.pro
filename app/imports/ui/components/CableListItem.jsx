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
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default CableListItem;
