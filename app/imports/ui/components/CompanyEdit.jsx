import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { Companies } from '../../api/company/Companies';
import { countryArray, stateArray } from '../../api/schema/FormSchemas';
import { ElementName, ElementAddress, ElementAddress2, ElementCity, ElementState, ElementZip, ElementCountry, ElementPhone, ElementFax, ElementEmail, ElementLogoURL, ButtonSubmit } from '../../api/testcafe/TestCafe';

const bridge = new SimpleSchema2Bridge(Companies.formSchema);

/* Renders the EditStuff page for editing a single document. */
const CompanyEdit = ({ company }) => {
  const submit = (data) => {
    const { _id, name, address, phone, fax, email, logoURL } = data;
    if (_id) {
      Companies.collection.update(_id, { $set: { name, address, phone, fax, email, logoURL } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Company updated successfully', 'success')));
    } else {
      Companies.collection.insert({ name, address, phone, fax, email, logoURL }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Company added successfully', 'success')));
    }
  };
  return (
    <AutoForm schema={bridge} onSubmit={data => submit(data)} model={company}>
      <Card id="add-company-page">
        <Card.Header id="edit-company-page">
          <Card.Title>{company && company._id ? 'Edit' : 'Add'} Company</Card.Title>
        </Card.Header>
        <Card.Body>
          <TextField id={ElementName} name="name" />
          <TextField id={ElementAddress} name="address.address" />
          <TextField id={ElementAddress2} name="address.address2" />
          <TextField id={ElementCity} name="address.city" />
          <SelectField id={ElementState} name="address.state" allowedValues={stateArray} />
          <TextField id={ElementZip} name="address.zip" />
          <SelectField id={ElementCountry} name="address.country" defaultValue="US" allowedValues={countryArray} />
          <TextField id={ElementPhone} name="phone" />
          <TextField id={ElementFax} name="fax" />
          <TextField id={ElementEmail} name="email" />
          <TextField id={ElementLogoURL} name="logoURL" />
          <SubmitField id={ButtonSubmit} value="Submit" />
          <ErrorsField />
          <HiddenField name="_id" />
        </Card.Body>
      </Card>
    </AutoForm>
  );
};

CompanyEdit.propTypes = {
  company: PropTypeCompany.isRequired,
};

export default CompanyEdit;
