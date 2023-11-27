import React from 'react';
import { Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilFill } from 'react-bootstrap-icons';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { CombinePath, ParamCompanyID, PathListProject, PathListUser, PathEditCompany } from '../../api/navigation/Navigation';
import { formatAddress } from '../../api/schema/FormSchemas';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const CompanyView = ({ company }) => {
  const editPath = CombinePath(PathEditCompany, { [ParamCompanyID]: company._id });
  const projPath = CombinePath(PathListProject, { [ParamCompanyID]: company._id });
  const userPath = CombinePath(PathListUser, { [ParamCompanyID]: company._id });
  return (
    <Card>
      <Card.Header>
        <Image alt={company.name} src={company.logoURL} width="50px" height="50px" />
        <Card.Title>{company.name}</Card.Title>&nbsp;<Link to={editPath}><PencilFill aria-label="Edit" /></Link>
      </Card.Header>
      <Card.Body>
        <Card.Text>{formatAddress(company.address)}</Card.Text>
        <Card.Text>{company.phone}</Card.Text>
        <Card.Text>{company.fax}</Card.Text>
        <Card.Text>{company.email}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={projPath}>
          Projects
        </Link>&nbsp;
        <Link to={userPath}>
          Users
        </Link>
      </Card.Footer>
    </Card>
  );
};

CompanyView.propTypes = {
  company: PropTypeCompany.isRequired,
};
export default CompanyView;
