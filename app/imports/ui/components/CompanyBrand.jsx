import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Image } from 'react-bootstrap';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';

const CompanyBrand = ({ company }) => {
  if (company && Meteor.user() && Meteor.user().username !== 'admin@foo.com') {
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

CompanyBrand.defaultProps = {
  company: { _id: '', name: 'CableTrack PRO', logoURL: '/images/logo.png' },
};

export default CompanyBrand;
