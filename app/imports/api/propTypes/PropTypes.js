import PropTypes from 'prop-types';

const PropTypeCablePullIn = PropTypes.shape({
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  cableID: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  personInstalled: PropTypes.string.isRequired,
  dateInstalled: PropTypes.instanceOf(Date).isRequired,
  lengthInstalled: PropTypes.number.isRequired,
  pulledHand: PropTypes.bool.isRequired,
  tugger: PropTypes.string,
  calibrationId: PropTypes.string,
  maxPullingTension: PropTypes.number,
  notes: PropTypes.string,
});

const PropTypeCableTerminate = PropTypes.shape({
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  cableID: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  personTerminated: PropTypes.string.isRequired,
  dateTerminated: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.string,
  notes: PropTypes.string,
});

const PropTypeCableTestContinuity = PropTypes.shape({
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  cableID: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  personTested: PropTypes.string.isRequired,
  dateTested: PropTypes.instanceOf(Date).isRequired,
  resistance: PropTypes.number,
  notes: PropTypes.string,
});

const PropTypeCable = PropTypes.shape({
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  cableType: PropTypes.string,
  conductors: PropTypes.string,
  voltageCable: PropTypes.string,
  voltageTest: PropTypes.string,
  notes: PropTypes.string,
});

const PropTypeAddress = PropTypes.shape({
  address: PropTypes.string.isRequired,
  address2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  country: PropTypes.string,
});

const PropTypeProject = PropTypes.shape({
  companyID: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contract: PropTypes.string,
  bidNumber: PropTypes.string,
  mailAddress: PropTypeAddress,
  shipAddress: PropTypeAddress,
  jobPhone: PropTypes.string,
  jobFax: PropTypes.string,
  jobEmail: PropTypes.string,
  notes: PropTypes.string,
});

const PropTypeCompany = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypeAddress,
  phone: PropTypes.string,
  fax: PropTypes.string,
  email: PropTypes.string,
  logoURL: PropTypes.string,
});

const PropTypeUserProfile = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  emails: PropTypes.arrayOf(PropTypes.shape({ address: PropTypes.string, verified: PropTypes.bool })),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address: PropTypeAddress,
  phone: PropTypes.string,
  fax: PropTypes.string,
  picture: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
});

export { PropTypeAddress, PropTypeCompany, PropTypeProject, PropTypeCable, PropTypeCablePullIn, PropTypeCableTerminate, PropTypeCableTestContinuity, PropTypeUserProfile };
