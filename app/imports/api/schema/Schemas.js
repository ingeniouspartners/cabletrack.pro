import SimpleSchema from 'simpl-schema';

/* const stateArray = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']; */

const addressSchema = new SimpleSchema({
  address: { type: String, max: 60 },
});

const citySchema = new SimpleSchema({
  city: { type: String, max: 60 },
});

const stateSchema = new SimpleSchema({
  state: { type: String, regEx: /^[A-Z]{2}$/ },
});

const zipSchema = new SimpleSchema({
  zip: { type: String, max: 10, regEx: /^(\\d{5}(-\\d{4})?|[A-Z]\\d[A-Z] ?\\d[A-Z]\\d)$/ },
});

const countrySchema = new SimpleSchema({
  country: { type: String, max: 2, regEx: /^[A-Z]{2}$/ },
});

const phoneSchema = new SimpleSchema({
  phone: { type: String, max: 12, regEx: /^(\\d{3}-)?\\d{3}-\\d{4}$/ },
});

const projectItemSchema = new SimpleSchema({
  project: { type: String, max: 20, regEx: /^(\\w([\\w\\.]{0,9}|[\\w-]{0,9}))$/, skipRegExCheckForEmptyStrings: true },
});

const projectMgrSchema = new SimpleSchema({
  projectMgr: { type: SimpleSchema.Integer, max: 65535, min: 1, optional: true },
});

const terminationLocationSchema = new SimpleSchema({
  terminationLocation: { type: String, max: 30 },
});

const measurementSchema = new SimpleSchema({
  measurement: Number,
});

/* Unsure exactly how to do this, code below for reference
      "MeasurementTimed": {
        "title": "Timed Measurement",
        "required": [
          "Measurement",
          "TimeIndex"
        ],
        "type": "object",
        "properties": {
          "TimeIndex": {
            "type": "number",
            "format": "single",
            "example": 1
          },
          "Value": {
            "$ref": "#/components/schemas/Measurement"
          }
        }
      },

      Also assuming integer although the code says number.
 */
const measurementTimedSchema = new SimpleSchema({
  timeIndex: SimpleSchema.Integer,
  value: measurementSchema,
});

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
  },
  { requiredByDefault: false },
);

const projectSchema = new SimpleSchema(
  {
    description: { type: String, max: 60, required: true },
    projectName: { type: String, max: 100 },
    contract: projectItemSchema,
    bidNumber: { type: String, max: 20 }, // Probably want to add a regex here
    projectMgr: projectMgrSchema,
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
    formEmail: String, // May want to make this a regEx for email and make it read only. Not sure if can do that here.
  },
  { requiredByDefault: false },
);

const cableSchema = new SimpleSchema(
  {
    description: { type: String, max: 60, required: true },
    refDrawingNo: { type: String, max: 30 },
    refDrawingRev: { type: String, max: 20 },
    system: { type: String, max: 30 },
    building: { type: String, max: 30 },
    zone: { type: String, max: 30 },
    origination: terminationLocationSchema,
    termination: terminationLocationSchema,
    lengthPlanned: measurementSchema,
    classification: { type: String, allowedValues: ['Power', 'Control', 'Telcom', 'Fiber', 'Other'] },
    cableType: { type: String, max: 20 },
    conductors: { type: String, max: 30 },
    voltageCable: { type: String, max: 30 },
    voltageTest: { type: String, max: 15 },
  },
  { requiredByDefault: false },
);

const cablePullInSchema = new SimpleSchema(
  {
    personInstalled: { type: String, max: 30, required: true },
    dateInstalled: { type: Date, required: true },
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
    personTerminated: { type: String, max: 30 },
    dateTerminated: Date,
    location: terminationLocationSchema,
  },
);

const cableTestContinuitySchema = new SimpleSchema(
  {
    resistance: measurementSchema,
  },
);

const cableTestMeggerSchema = new SimpleSchema(
  {
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
    vLFInstrument: { type: String, max: 30 },
    vLFCalibrationID: { type: String, max: 30 },
    temperatureAmbient: Number,
    humidityAmbient: Number,
    countSplices: SimpleSchema.Integer,
    testLocation: terminationLocationSchema,
    testLocationOther: terminationLocationSchema,
    systemConnection: { type: String, allowedValues: ['Some', 'Value'] },
    grounded: { type: Boolean, defaultValue: false },
  },
);

export { companySchema, projectSchema, cableSchema, cablePullInSchema, cableTerminateSchema, cableTestContinuitySchema, cableTestMeggerSchema, cableTestVLFSchema };
