import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';

const requiredIDSchema = { type: String, max: 20, required: true };
const optionalIDSchema = { type: String, max: 20, optional: true };

const stateArray = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'NT', 'YT', 'NU'];

const countryArray = ['US', 'CA'];

const addressSchema = new SimpleSchema(
  {
    address: { type: String, max: 60, required: true },
    address2: { type: String, max: 60 },
    city: { type: String, max: 60, required: true },
    state: { type: String, max: 2, allowedValues: stateArray, required: true },
    zip: { type: String, max: 10, regEx: /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] ?\d[A-Z]\d)$/, required: true },
    country: { type: String, max: 2, allowedValues: countryArray, required: true, defaultValue: 'US' },
  },
  { requiredByDefault: false },
);

const emailSchema = new SimpleSchema(
  {
    address: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, required: true },
    verified: { type: Boolean, defaultValue: false },
  },
  { requiredByDefault: false },
);

const formatAddress = (address) => {
  if (!address) {
    return '';
  }
  let formattedAddress = `${address.address}\n`;
  if (address.address2) {
    formattedAddress += `${address.address2}\n`;
  }
  formattedAddress += `${address.city}, ${address.state} ${address.zip}\n${address.country}`;
  return formattedAddress;
};

formatAddress.propTypes = {
  address: addressSchema,
};

const formatEmails = (emails) => {
  if (!emails) {
    return '';
  }
  let formattedEmails = '';
  emails.forEach((email) => {
    formattedEmails += `${email.address}\n`;
  });
  return formattedEmails;
};

formatEmails.propTypes = {
  emails: PropTypes.arrayOf(emailSchema),
};

const measurementTimedSchema = new SimpleSchema({
  timeIndex: Number,
  value: { type: Number, optional: true },
});

// Possible email form in here too?
const FormSchemaCompany = new SimpleSchema(
  {
    name: { type: String, max: 60, required: true },
    address: { type: addressSchema },
    phone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    fax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    email: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/ },
    logoURL: { type: String, max: 256, regEx: /^https?:\/\//, optional: true },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

const FormSchemaProject = new SimpleSchema(
  {
    companyID: requiredIDSchema,
    code: { type: String, max: 20, regEx: /^(\w([\w\\.]{0,19}|[\w-]{0,19}))$/, required: true },
    name: { type: String, max: 60, required: true },
    contract: { type: String, max: 20, regEx: /^(\w([\w\\.]{0,19}|[\w-]{0,19}))$/ },
    bidNumber: { type: String, max: 20 },
    mailAddress: { type: addressSchema, optional: true },
    shipAddress: { type: addressSchema, optional: true },
    jobPhone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    jobFax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    jobEmail: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/ },
    notes: { type: String, optional: true },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

const FormSchemaCable = new SimpleSchema(
  {
    companyID: requiredIDSchema,
    projectID: requiredIDSchema,
    name: { type: String, max: 60, required: true },
    description: { type: String, max: 1000, optional: true },
    costCode: { type: String, max: 10, regEx: /^(\w([\w\\.]{0,9}|[\w-]{0,9}))$/ },
    refDrawingNo: { type: String, max: 30 },
    refDrawingRev: { type: String, max: 20 },
    system: { type: String, max: 30 },
    building: { type: String, max: 30 },
    zone: { type: String, max: 30 },
    origination: { type: String, max: 30, optional: true },
    termination: { type: String, max: 30, optional: true },
    lengthPlanned: { type: Number, optional: true },
    classification: { type: String, allowedValues: ['Power', 'Control', 'Telecom', 'Fiber', 'Other'], defaultValue: 'Power' },
    cableType: { type: String, max: 20, defaultValue: 'THHN' },
    conductors: { type: String, max: 30 },
    voltageCable: { type: String, max: 15 },
    voltageTest: { type: String, max: 15 },
    notes: { type: String, optional: true },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

const FormSchemaCablePullIn = new SimpleSchema(
  {
    companyID: requiredIDSchema,
    projectID: requiredIDSchema,
    cableID: requiredIDSchema,
    personInstalled: requiredIDSchema,
    dateInstalled: { type: Date, required: true, defaultValue: new Date() },
    lengthInstalled: { type: Number, optional: true, required: true },
    pulledHand: { type: Boolean, defaultValue: false, required: true },
    tugger: String,
    tuggerCalibrationID: String,
    maxPullingTension: Number,
    notes: { type: String },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

// Just in case not clear, things are required by default.
const FormSchemaCableTerminate = new SimpleSchema(
  {
    companyID: requiredIDSchema,
    projectID: requiredIDSchema,
    cableID: requiredIDSchema,
    personTerminated: requiredIDSchema,
    dateTerminated: { type: Date, required: true, defaultValue: new Date() },
    location: { type: String, max: 30, optional: true },
    notes: { type: String, optional: true },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

const FormSchemaCableTestContinuity = new SimpleSchema(
  {
    companyID: requiredIDSchema,
    projectID: requiredIDSchema,
    cableID: requiredIDSchema,
    personTested: requiredIDSchema,
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    resistance: { type: Number, optional: true },
    notes: { type: String, optional: true },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

const FormSchemaCableTestMegger = new SimpleSchema(
  {
    companyID: requiredIDSchema,
    projectID: requiredIDSchema,
    cableID: requiredIDSchema,
    personTested: requiredIDSchema,
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    meggerInstrument: { type: String, max: 30 },
    meggerCalibrationID: { type: String, max: 30 },
    A_B: measurementTimedSchema,
    B_C: measurementTimedSchema,
    C_A: measurementTimedSchema,
    A_Grd: measurementTimedSchema,
    B_Grd: measurementTimedSchema,
    C_Grd: measurementTimedSchema,
    notes: { type: String, optional: true },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

const FormSchemaCableTestVLF = new SimpleSchema(
  {
    companyID: requiredIDSchema,
    projectID: requiredIDSchema,
    cableID: requiredIDSchema,
    personTested: requiredIDSchema,
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    vLFInstrument: { type: String, max: 30 },
    vLFCalibrationID: { type: String, max: 30 },
    temperatureAmbient: Number,
    humidityAmbient: Number,
    countSplices: SimpleSchema.Integer,
    testLocation: { type: String, max: 30, optional: true },
    testLocationOther: { type: String, max: 30, optional: true },
    systemConnection: { type: String, allowedValues: ['Single', 'Multi'] },
    grounded: { type: Boolean, defaultValue: false },
    notes: { type: String, optional: true },
    _id: optionalIDSchema,
  },
  { requiredByDefault: false },
);

const FormSchemaUserProfile = new SimpleSchema(
  {
    // Ensuring every user has an email address, should be in server-side code
    username: requiredIDSchema,
    emails: { type: Array },
    'emails.$': { type: emailSchema },
    createdAt: { type: Date },
    services: { type: Object, blackbox: true },
    firstName: { type: String, max: 30 },
    lastName: { type: String, max: 30 },
    address: { type: addressSchema },
    phone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    fax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    picture: { type: String, max: 256, regEx: /^https?:\/\// },
    _id: { type: String, max: 20 },
  },
  { requiredByDefault: false },
);

export { stateArray, countryArray, FormSchemaCompany, FormSchemaProject, FormSchemaCable, FormSchemaCablePullIn, FormSchemaCableTerminate, FormSchemaCableTestContinuity, FormSchemaCableTestMegger,
  FormSchemaCableTestVLF, FormSchemaUserProfile };
export { formatAddress, formatEmails };
