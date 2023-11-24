import SimpleSchema from 'simpl-schema';

const stateArray = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'NT', 'YT', 'NU'];

const addressSchema = new SimpleSchema(
  {
    address: { type: String, max: 60 },
    address2: { type: String, max: 60 },
    city: { type: String, max: 60 },
    state: { type: String, regEx: /^[A-Z]{2}$/, skipRegExCheckForEmptyStrings: true },
    zip: { type: String, max: 10, regEx: /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] ?\d[A-Z]\d)$/, skipRegExCheckForEmptyStrings: true },
    country: { type: String, max: 2, regEx: /^[A-Z]{2}$/, skipRegExCheckForEmptyStrings: true, defaultValue: 'US' },
  },
  { requiredByDefault: false },
);

const formatAddress = (address) => {
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

const measurementTimedSchema = new SimpleSchema({
  timeIndex: Number,
  value: { type: Number, optional: true },
});

const SchemaOwner = new SimpleSchema(
  {
    ownedID: { type: String, max: 20, required: true },
    ownerID: { type: String, max: 20, required: true },
  },
  { requiredByDefault: false },
);

// Possible email form in here too?
const SchemaCompany = new SimpleSchema(
  {
    name: { type: String, max: 60, required: true },
    address: { type: addressSchema },
    phone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
    fax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
    email: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, skipRegExCheckForEmptyStrings: true },
    logoURL: { type: String, max: 256, regEx: /^https?:\/\//, skipRegExCheckForEmptyStrings: true, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const SchemaProject = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    code: { type: String, max: 20, regEx: /^(\w([\w\\.]{0,19}|[\w-]{0,19}))$/, required: true },
    name: { type: String, max: 60, required: true },
    contract: { type: String, max: 20, regEx: /^(\w([\w\\.]{0,19}|[\w-]{0,19}))$/, skipRegExCheckForEmptyStrings: true },
    bidNumber: { type: String, max: 20 },
    mailAddress: { type: addressSchema, optional: true },
    shipAddress: { type: addressSchema, optional: true },
    jobPhone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
    jobFax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
    jobEmail: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, skipRegExCheckForEmptyStrings: true },
    notes: { type: String, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const SchemaCable = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    name: { type: String, max: 60, required: true },
    description: { type: String, max: 1000, optional: true },
    costCode: { type: String, max: 10, regEx: /^(\w([\w\\.]{0,9}|[\w-]{0,9}))$/, skipRegExCheckForEmptyStrings: true },
    refDrawingNo: { type: String, max: 30 },
    refDrawingRev: { type: String, max: 20 },
    system: { type: String, max: 30 },
    building: { type: String, max: 30 },
    zone: { type: String, max: 30 },
    origination: { type: String, max: 30, optional: true },
    termination: { type: String, max: 30, optional: true },
    lengthPlanned: { type: Number, optional: true },
    classification: { type: String, allowedValues: ['Power', 'Control', 'Telecom', 'Fiber', 'Other'], defaultValue: 'Power' },
    cableType: { type: String, max: 20 },
    conductors: { type: String, max: 30 },
    voltageCable: { type: String, max: 30 },
    voltageTest: { type: String, max: 15 },
    notes: { type: String, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const SchemaCablePullIn = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personInstalled: { type: String, max: 20, required: true },
    dateInstalled: { type: Date, required: true, defaultValue: new Date() },
    lengthInstalled: { type: { type: Number, optional: true }, required: true },
    pulledHand: { type: Boolean, defaultValue: false, required: true },
    tugger: String,
    tuggerCalibrationID: String,
    maxPullingTension: { type: Number, optional: true },
    notes: { type: String, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

// Just in case not clear, things are required by default.
const SchemaCableTerminate = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personTerminated: { type: String, max: 20, required: true },
    dateTerminated: { type: Date, required: true, defaultValue: new Date() },
    location: { type: String, max: 30, optional: true },
    notes: { type: String, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const SchemaCableTestContinuity = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personTested: { type: String, max: 20, required: true },
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    resistance: { type: Number, optional: true },
    notes: { type: String, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const SchemaCableTestMegger = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personTested: { type: String, max: 20, required: true },
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
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const SchemaCableTestVLF = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personTested: { type: String, max: 20, required: true },
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
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const SchemaUserProfile = new SimpleSchema(
  {
    // Ensuring every user has an email address, should be in server-side code
    username: { type: String, max: 20, required: true },
    emails: { type: Array },
    'emails.$': { type: Object },
    'emails.$.address': { type: String, required: true, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/ },
    'emails.$.verified': { type: Boolean, defaultValue: false },
    createdAt: { type: Date },
    services: { type: Object, blackbox: true },
    firstName: { type: String, max: 30 },
    lastName: { type: String, max: 30 },
    address: { type: addressSchema },
    phone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
    fax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/, skipRegExCheckForEmptyStrings: true },
    picture: { type: String, max: 256, regEx: /^https?:\/\//, skipRegExCheckForEmptyStrings: true },
    _id: { type: String, max: 20 },
  },
  { requiredByDefault: false },
);

export { stateArray, SchemaOwner, SchemaCompany, SchemaProject, SchemaCable, SchemaCablePullIn, SchemaCableTerminate, SchemaCableTestContinuity, SchemaCableTestMegger, SchemaCableTestVLF, SchemaUserProfile };
export { formatAddress };
