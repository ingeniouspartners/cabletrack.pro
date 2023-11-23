import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilFill } from 'react-bootstrap-icons';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, PathEditCompany } from '../../api/navigation/Navigation';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const CompanyView = ({ company }) => {
  const editPath = CombinePath(PathEditCompany, company);
  return (
    <Card>
      <Card.Header as="h5">Cable Pull In</Card.Header>
      <Card.Body>
        <Card.Title>{company.name}</Card.Title>
        <Card.Subtitle>{company.description}</Card.Subtitle>
        <Card.Text>{company.notes}</Card.Text>
        <Card.Footer>
          <Link to={editPath}><PencilFill /></Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

CompanyView.propTypes = {
  company: PropTypeCompany.isRequired,
};
export default CompanyView;
