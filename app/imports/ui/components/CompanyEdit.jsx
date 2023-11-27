import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { Companies } from '../../api/company/Companies';
import { stateArray } from '../../api/schema/FormSchemas';

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
          <TextField name="name" />
          <TextField name="address.address" />
          <TextField name="address.address2" />
          <TextField name="address.city" />
          <SelectField name="address.state" allowedValues={stateArray} />
          <TextField name="address.zip" />
          <SelectField name="address.country" defaultValue="US" allowedValues={['US', 'CA']} />
          <TextField name="phone" />
          <TextField name="fax" />
          <TextField name="email" />
          <TextField name="logoURL" />
          <SubmitField value="Submit" />
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
