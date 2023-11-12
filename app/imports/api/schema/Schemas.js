import SimpleSchema from 'simpl-schema';

const stateArray = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'NT', 'YT', 'NU'];

const dbIDSchema = new SimpleSchema({
  dbID: { type: String, max: 20, required: true },
});

const addressSchema = new SimpleSchema({
  address: { type: String, max: 60 },
});

const citySchema = new SimpleSchema({
  city: { type: String, max: 60 },
});

const stateSchema = new SimpleSchema({
  state: { type: String, regEx: /^[A-Z]{2}$/, skipRegExCheckForEmptyStrings: true },
});

const zipSchema = new SimpleSchema({
  zip: { type: String, max: 10, regEx: /^(\\d{5}(-\\d{4})?|[A-Z]\\d[A-Z] ?\\d[A-Z]\\d)$/, skipRegExCheckForEmptyStrings: true },
});

const countrySchema = new SimpleSchema({
  country: { type: String, max: 2, regEx: /^[A-Z]{2}$/, skipRegExCheckForEmptyStrings: true },
});

const phoneSchema = new SimpleSchema({
  phone: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/, skipRegExCheckForEmptyStrings: true },
});

const projectItemSchema = new SimpleSchema({
  project: { type: String, max: 20, regEx: /^(\\w([\\w\\.]{0,19}|[\\w-]{0,19}))$/, skipRegExCheckForEmptyStrings: true },
});

const terminationLocationSchema = new SimpleSchema({
  terminationLocation: { type: String, max: 30, optional: true },
});

const measurementSchema = new SimpleSchema({
  measurement: { type: Number, optional: true },
});

const measurementTimedSchema = new SimpleSchema({
  timeIndex: Number,
  value: measurementSchema,
});

const emailSchema = new SimpleSchema(
  {
    email: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, skipRegExCheckForEmptyStrings: true },
  },
);

// Possible email form in here too?
const companySchema = new SimpleSchema(
  {
    name: { type: String, max: 60, required: true },
    address: addressSchema,
    address2: addressSchema,
    city: citySchema,
    state: stateSchema,
    zip: zipSchema,
    country: countrySchema,
    phone: phoneSchema,
    fax: phoneSchema,
    email: emailSchema,
    owners: { type: Array, required: true },
  },
  { requiredByDefault: false },
);

const projectSchema = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    description: { type: String, max: 60, required: true },
    projectName: { type: String, max: 100 },
    contract: projectItemSchema,
    bidNumber: { type: String, max: 20 },
    jobPhone: phoneSchema,
    jobFax: phoneSchema,
    mailAddress: addressSchema,
    mailAddress2: addressSchema,
    mailCity: citySchema,
    mailState: stateSchema,
    mailZip: zipSchema,
    mailCountry: countrySchema,
    shipAddress: addressSchema,
    shipAddress2: addressSchema,
    shipCity: citySchema,
    shipState: stateSchema,
    shipZip: zipSchema,
    shipCountry: countrySchema,
    formEmail: emailSchema,
    owners: { type: Array, required: true },
  },
  { requiredByDefault: false },
);

const cableSchema = new SimpleSchema(
  {
    companyID: dbIDSchema,
    projectID: dbIDSchema,
    costCode: { type: String, max: 10, regEx: /^(\\w([\\w\\.]{0,9}|[\\w-]{0,9}))$/, skipRegExCheckForEmptyStrings: true },
    description: { type: String, max: 60, required: true },
    refDrawingNo: { type: String, max: 30 },
    refDrawingRev: { type: String, max: 20 },
    system: { type: String, max: 30 },
    building: { type: String, max: 30 },
    zone: { type: String, max: 30 },
    origination: terminationLocationSchema,
    termination: terminationLocationSchema,
    lengthPlanned: measurementSchema,
    classification: { type: String, allowedValues: ['Power', 'Control', 'Telecom', 'Fiber', 'Other'], defaultValue: 'Power' },
    cableType: { type: String, max: 20 },
    conductors: { type: String, max: 30 },
    voltageCable: { type: String, max: 30 },
    voltageTest: { type: String, max: 15 },
    owners: { type: Array, required: true },
  },
  { requiredByDefault: false },
);

const cablePullInSchema = new SimpleSchema(
  {
    companyID: dbIDSchema,
    projectID: dbIDSchema,
    cableID: dbIDSchema,
    personInstalled: dbIDSchema,
    dateInstalled: { type: Date, required: true, defaultValue: new Date() },
    lengthInstalled: { type: measurementSchema, required: true },
    pulledHand: { type: Boolean, defaultValue: false, required: true },
    tugger: String,
    tuggerCalibrationID: String,
    maxPullingTension: measurementSchema,
  },
  { requiredByDefault: false },
);

// Just in case not clear, things are required by default.
const cableTerminateSchema = new SimpleSchema(
  {
    companyID: dbIDSchema,
    projectID: dbIDSchema,
    cableID: dbIDSchema,
    personTerminated: dbIDSchema,
    dateTerminated: { type: Date, required: true, defaultValue: new Date() },
    location: terminationLocationSchema,
  },
);

const cableTestContinuitySchema = new SimpleSchema(
  {
    companyID: dbIDSchema,
    projectID: dbIDSchema,
    cableID: dbIDSchema,
    personTested: dbIDSchema,
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    resistance: measurementSchema,
  },
);

const cableTestMeggerSchema = new SimpleSchema(
  {
    companyID: dbIDSchema,
    projectID: dbIDSchema,
    cableID: dbIDSchema,
    personTested: dbIDSchema,
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    meggerInstrument: { type: String, max: 30 },
    meggerCalibrationID: { type: String, max: 30 },
    A_B: Array,
    'A_B.$': measurementTimedSchema,
    B_C: Array,
    'B_C.$': measurementTimedSchema,
    C_A: Array,
    'C_A.$': measurementTimedSchema,
    A_Grd: Array,
    'A_Grd.$': measurementTimedSchema,
    B_Grd: Array,
    'B_Grd.$': measurementTimedSchema,
    C_Grd: Array,
    'C_Grd.$': measurementTimedSchema,
  },
);

const cableTestVLFSchema = new SimpleSchema(
  {
    companyID: dbIDSchema,
    projectID: dbIDSchema,
    cableID: dbIDSchema,
    personTested: dbIDSchema,
    dateTested: { type: Date, required: true, defaultValue: new Date() },
    vLFInstrument: { type: String, max: 30 },
    vLFCalibrationID: { type: String, max: 30 },
    temperatureAmbient: Number,
    humidityAmbient: Number,
    countSplices: SimpleSchema.Integer,
    testLocation: terminationLocationSchema,
    testLocationOther: terminationLocationSchema,
    systemConnection: { type: String, allowedValues: ['Single', 'Multi'] },
    grounded: { type: Boolean, defaultValue: false },
  },
);

export { stateArray, emailSchema, companySchema, projectSchema, cableSchema, cablePullInSchema, cableTerminateSchema, cableTestContinuitySchema, cableTestMeggerSchema, cableTestVLFSchema };
