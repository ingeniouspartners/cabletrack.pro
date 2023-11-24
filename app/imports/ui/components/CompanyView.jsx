import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilFill } from 'react-bootstrap-icons';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, PathEditCompany } from '../../api/navigation/Navigation';
import { formatAddress } from '../../api/schema/Schemas';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const CompanyView = ({ company }) => {
  const editPath = CombinePath(PathEditCompany, { companyID: company._id });
  return (
    <Card>
      <Card.Header>
        <Card.Title>View Company</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{company.name}</Card.Text>
        <Card.Text>{formatAddress(company.address)}</Card.Text>
        <Card.Text>{company.phone}</Card.Text>
        <Card.Text>{company.fax}</Card.Text>
        <Card.Text>{company.email}</Card.Text>
        <Card.Text>{company.logoURL}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={editPath}>
          <PencilFill />
        </Link>
      </Card.Footer>
    </Card>
  );
};

CompanyView.propTypes = {
  company: PropTypeCompany.isRequired,
};
export default CompanyView;
