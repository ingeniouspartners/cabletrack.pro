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
