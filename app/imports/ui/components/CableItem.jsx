import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const CableItem = ({ cable }) => (
  <tr>
    <td>{cable.name}</td>
    <td>{cable.quantity}</td>
    <td>{cable.condition}</td>
    <td>
      <Link to={`/edit/${cable._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
CableItem.propTypes = {
  cable: PropTypes.shape({
    description: String,
    refDrawingNo: String,
    refDrawingRev: String,
    system: String,
    building: String,
    zone: String,
    origination: String,
    termination: String,
    lengthPlanned: Number,
    classification: String,
    cableType: String,
    conductors: String,
    voltageCable: String,
    voltageTest: String,
  }).isRequired,
};

export default CableItem;
