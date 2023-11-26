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
  cableType: PropTypes.string.isRequired,
  conductors: PropTypes.string.isRequired,
  voltageCable: PropTypes.string.isRequired,
  voltageTest: PropTypes.string.isRequired,
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

const PropTypeUser = PropTypes.shape({
  username: { type: String, max: 20, required: true },
  emails: { type: Array },
  'emails.$': { type: Object },
  'emails.$.address': { type: String, required: true, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/ },
  'emails.$.verified': { type: Boolean, defaultValue: false },
  createdAt: { type: Date },
  services: { type: Object, blackbox: true },
  firstName: { type: String, max: 30 },
  lastName: { type: String, max: 30 },
  address: { type: PropTypeAddress },
  phone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
  fax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
  picture: { type: String, max: 256, regEx: /^https?:\/\//, skipRegExCheckForEmptyStrings: true },
  _id: { type: String, max: 20 },
});

export { PropTypeAddress, PropTypeCompany, PropTypeProject, PropTypeCable, PropTypeCablePullIn, PropTypeCableTerminate, PropTypeCableTestContinuity, PropTypeUser };
