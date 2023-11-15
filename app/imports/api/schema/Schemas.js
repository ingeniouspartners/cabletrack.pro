import SimpleSchema from 'simpl-schema';

const stateArray = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'NT', 'YT', 'NU'];

const measurementTimed = new SimpleSchema({
  timeIndex: Number,
  value: { type: Number, optional: true },
});

// Possible email form in here too?
const companySchema = new SimpleSchema(
  {
    name: { type: String, max: 60, required: true },
    address: { type: String, max: 60 },
    address2: { type: String, max: 60 },
    city: { type: String, max: 60 },
    state: { type: String, regEx: /^[A-Z]{2}$/ },
    zip: { type: String, max: 10, regEx: /^(\\d{5}(-\\d{4})?|[A-Z]\\d[A-Z] ?\\d[A-Z]\\d)$/ },
    country: { type: String, max: 2, regEx: /^[A-Z]{2}$/ },
    phone: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/ },
    fax: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/ },
    email: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/ },
    logoURL: { type: String, regEx: /^https?:\/\//, optional: true },
    owners: Array,
    'owners.$': { type: String, max: 20, required: true },

  },
  { requiredByDefault: false },
);

const projectSchema = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    name: { type: String, max: 60, required: true },
    description: String,
    contract: { type: String, max: 20, regEx: /^(\\w([\\w\\.]{0,19}|[\\w-]{0,19}))$/ },
    bidNumber: { type: String, max: 20 },
    jobPhone: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/ },
    jobFax: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/ },
    mailAddress: { type: String, max: 60 },
    mailAddress2: { type: String, max: 60 },
    mailCity: { type: String, max: 60 },
    mailState: { type: String, regEx: /^[A-Z]{2}$/ },
    mailZip: { type: String, max: 10, regEx: /^(\\d{5}(-\\d{4})?|[A-Z]\\d[A-Z] ?\\d[A-Z]\\d)$/ },
    mailCountry: { type: String, max: 2, regEx: /^[A-Z]{2}$/ },
    shipAddress: { type: String, max: 60 },
    shipAddress2: { type: String, max: 60 },
    shipCity: { type: String, max: 60 },
    shipState: { type: String, regEx: /^[A-Z]{2}$/ },
    shipZip: { type: String, max: 10, regEx: /^(\\d{5}(-\\d{4})?|[A-Z]\\d[A-Z] ?\\d[A-Z]\\d)$/ },
    shipCountry: { type: String, max: 2, regEx: /^[A-Z]{2}$/ },
    formEmail: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/ },
    owners: Array,
    'owners.$': { type: String, max: 20, required: true },
  },
  { requiredByDefault: false },
);

const cableSchema = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    name: { type: String, max: 60, required: true },
    description: String,
    costCode: { type: String, max: 10, regEx: /^(\\w([\\w\\.]{0,9}|[\\w-]{0,9}))$/ },
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
    users: Array,
    'users.$': { type: String, max: 20 },
    owners: Array,
    'owners.$': { type: String, max: 20, required: true },
  },
  { requiredByDefault: false },
);

const cablePullInSchema = new SimpleSchema(
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
  },
  { requiredByDefault: false },
);

// Just in case not clear, things are required by default.
const cableTerminateSchema = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personTerminated: { type: String, max: 20, required: true },
    dateTerminated: { type: Date, required: true, defaultValue: new Date() },
    location: { type: String, max: 30, optional: true },
  },
);

const cableTestContinuitySchema = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personTested: { type: String, max: 20, required: true },
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    resistance: { type: Number, optional: true },
  },
);

const cableTestMeggerSchema = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
    cableID: { type: String, max: 20, required: true },
    personTested: { type: String, max: 20, required: true },
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    meggerInstrument: { type: String, max: 30 },
    meggerCalibrationID: { type: String, max: 30 },
    A_B: measurementTimed,
    B_C: measurementTimed,
    C_A: measurementTimed,
    A_Grd: measurementTimed,
    B_Grd: measurementTimed,
    C_Grd: measurementTimed,
  },
);

const cableTestVLFSchema = new SimpleSchema(
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
  },
);

const userProfileSchema = new SimpleSchema(
  {
    userID: { type: String, max: 20, required: true },
    name: { type: String, max: 60, required: true },
    address: { type: String, max: 60 },
    address2: { type: String, max: 60 },
    city: { type: String, max: 60 },
    state: { type: String, regEx: /^[A-Z]{2}$/ },
    zip: { type: String, max: 10, regEx: /^(\\d{5}(-\\d{4})?|[A-Z]\\d[A-Z] ?\\d[A-Z]\\d)$/ },
    country: { type: String, max: 2, regEx: /^[A-Z]{2}$/ },
    phone: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/ },
    fax: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/ },
    picURL: { type: String, regEx: /^https?:\/\//, optional: true },
  },
  { requiredByDefault: false },
);

export { stateArray, companySchema, projectSchema, cableSchema, cablePullInSchema, cableTerminateSchema, cableTestContinuitySchema, cableTestMeggerSchema, cableTestVLFSchema, userProfileSchema };
