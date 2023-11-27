import SimpleSchema from 'simpl-schema';

const addressSchema = new SimpleSchema(
  {
    address: { type: String, max: 60 },
    address2: { type: String, max: 60 },
    city: { type: String, max: 60 },
    state: { type: String, regEx: /^[A-Z]{2}$/ },
    zip: { type: String, max: 10, regEx: /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] ?\d[A-Z]\d)$/ },
    country: { type: String, max: 2, regEx: /^[A-Z]{2}$/ },
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

const measurementTimedSchema = new SimpleSchema(
  {
    timeIndex: { type: Number },
    value: { type: Number },
  },
  { requiredByDefault: false },
);

const DBSchemaOwnedBy = new SimpleSchema(
  {
    ownerID: { type: String, max: 20, required: true },
    ownedID: { type: String, max: 20, required: true },
  },
  { requiredByDefault: false },
);

const DBSchemaUsedBy = new SimpleSchema(
  {
    userID: { type: String, max: 20, required: true },
    usedID: { type: String, max: 20, required: true },
  },
  { requiredByDefault: false },
);

// Possible email form in here too?
const DBSchemaCompany = new SimpleSchema(
  {
    name: { type: String, max: 60, required: true },
    address: { type: addressSchema },
    phone: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    fax: { type: String, max: 12, regEx: /^(\d{3}-)?\d{3}-\d{4}$/ },
    email: { type: String, regEx: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/ },
    logoURL: { type: String, max: 256, regEx: /^https?:\/\//, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const DBSchemaProject = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
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
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const DBSchemaCable = new SimpleSchema(
  {
    companyID: { type: String, max: 20, required: true },
    projectID: { type: String, max: 20, required: true },
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
    cableType: { type: String, max: 20 },
    conductors: { type: String, max: 30 },
    voltageCable: { type: String, max: 30 },
    voltageTest: { type: String, max: 15 },
    notes: { type: String, optional: true },
    _id: { type: String, max: 20, optional: true },
  },
  { requiredByDefault: false },
);

const DBSchemaCablePullIn = new SimpleSchema(
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
const DBSchemaCableTerminate = new SimpleSchema(
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

const DBSchemaCableTestContinuity = new SimpleSchema(
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

const DBSchemaCableTestMegger = new SimpleSchema(
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

const DBSchemaCableTestVLF = new SimpleSchema(
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

const DBSchemaUserProfile = new SimpleSchema(
  {
    // Ensuring every user has an email address, should be in server-side code
    username: { type: String, max: 20, required: true },
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

export { DBSchemaOwnedBy, DBSchemaUsedBy, DBSchemaCompany, DBSchemaProject, DBSchemaCable, DBSchemaCablePullIn, DBSchemaCableTerminate, DBSchemaCableTestContinuity, DBSchemaCableTestMegger, DBSchemaCableTestVLF, DBSchemaUserProfile };
