import React from 'react';
import { Image } from 'react-bootstrap';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';

const CompanyBrand = ({ company }) => {
  if (company) {
    if (company.logoURL) {
      return (<Image className="company-logo" src={company.logoURL} alt={company.name} />);
    }
    return (<h2 className="company-logo">{company.name}</h2>);
  }
  return <Image className="app-logo" src="/images/logo.png" alt="CableTrack PRO" />;
};

CompanyBrand.propTypes = {
  company: PropTypeCompany,
};

export default CompanyBrand;
