import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { Companies } from '../../api/company/Companies';
import { countryArray, stateArray } from '../../api/schema/FormSchemas';
import { FieldName, FieldAddress, FieldAddress2, FieldCity, FieldState, FieldZip, FieldCountry, FieldPhone, FieldFax, FieldEmail, FieldLogoURL, ButtonSubmit } from '../../api/testcafe/TestCafe';

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
      <Card>
        <Card.Header>
          <Card.Title>{company && company._id ? 'Edit' : 'Add'} Company</Card.Title>
        </Card.Header>
        <Card.Body>
          <TextField id={FieldName} name="name" />
          <TextField id={FieldAddress} name="address.address" />
          <TextField id={FieldAddress2} name="address.address2" />
          <TextField id={FieldCity} name="address.city" />
          <SelectField id={FieldState} name="address.state" allowedValues={stateArray} />
          <TextField id={FieldZip} name="address.zip" />
          <SelectField id={FieldCountry} name="address.country" defaultValue="US" allowedValues={countryArray} />
          <TextField id={FieldPhone} name="phone" />
          <TextField id={FieldFax} name="fax" />
          <TextField id={FieldEmail} name="email" />
          <TextField id={FieldLogoURL} name="logoURL" />
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
