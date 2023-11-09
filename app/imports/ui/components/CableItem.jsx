import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Cables table. See pages/ListCables.jsx. */
const CableItem = ({ cable }) => (
  <tr>
    <td>{cable.description}</td>
    <td>{cable.refDrawingNo}</td>
    <td>{cable.refDrawingRev}</td>
    <td>{cable.system}</td>
    <td>{cable.building}</td>
    <td>{cable.zone}</td>
    <td>{cable.origination}</td>
    <td>{cable.termination}</td>
    <td>{cable.lengthPlanned}</td>
    <td>{cable.classification}</td>
    <td>{cable.cableType}</td>
    <td>{cable.conductors}</td>
    <td>{cable.voltageCable}</td>
    <td>{cable.voltageTest}</td>
    <td>
      <Link to={`/edit/${cable._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component. Theoretically only description and id are required.
CableItem.propTypes = {
  cable: PropTypes.objectOf(
    {
      description: String.isRequired,
      _id: String.isRequired,
      optional: PropTypes.shape({
        refDrawingNo: String,
        refDrawingRev: String,
        system: String,
        building: String,
        zone: String,
        origination: String,
        termination: String,
        lengthPlanned: Number,
        classification: PropTypes.oneOf(['Power', 'Control', 'Telcom', 'Fiber', 'Other']),
        cableType: String,
        conductors: String,
        voltageCable: String,
        voltageTest: String,
      }) },
  ).isRequired,
};

export default CableItem;
