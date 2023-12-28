import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';
import { Companies } from '../../api/company/Companies';
import { countryArray, stateArray } from '../../api/schema/FormSchemas';
import { FieldName, FieldAddress, FieldAddress2, FieldCity, FieldState, FieldZip, FieldCountry, FieldPhone, FieldFax, FieldEmail, FieldLogoURL, ButtonSubmit, FieldCompanyID } from '../../api/testcafe/TestCafe';

const bridge = new SimpleSchema2Bridge(Companies.formSchema);

/* Renders the EditStuff page for editing a single document. */
const CompanyEdit = ({ company }) => {
  const submit = (data) => {
    const { _id, name, address, phone, fax, email, logoURL } = data;
    if (_id) {
      Companies.collection.update(_id, { $set: { name, address, phone, fax, email, logoURL } }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Company updated successfully', 'success').then(() => window.history.back());
        }
      });
    } else {
      Companies.collection.insert({ name, address, phone, fax, email, logoURL }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Company added successfully', 'success').then(() => window.history.back());
        }
      });
    }
  };

  return (
    <AutoForm schema={bridge} onSubmit={data => submit(data)} model={company}>
      <Card>
        <Card.Header>
          <Card.Title>{company && company._id ? 'Edit' : 'Add'} Company</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col><TextField id={FieldName} name="name" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldAddress} name="address.address" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldAddress2} name="address.address2" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldCity} name="address.city" /></Col>
            <Col><SelectField id={FieldState} name="address.state" allowedValues={stateArray} /></Col>
            <Col><TextField id={FieldZip} name="address.zip" /></Col>
            <Col><SelectField id={FieldCountry} name="address.country" allowedValues={countryArray} /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldPhone} name="phone" /></Col>
            <Col><TextField id={FieldFax} name="fax" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldEmail} name="email" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldLogoURL} name="logoURL" /></Col>
          </Row>
          <ErrorsField />
        </Card.Body>
        <Card.Footer>
          <SubmitField id={ButtonSubmit} value="Submit" />
          <HiddenField id={FieldCompanyID} name="_id" />
        </Card.Footer>
      </Card>
    </AutoForm>
  );
};

CompanyEdit.propTypes = {
  company: PropTypeCompany.isRequired,
};

export default CompanyEdit;
