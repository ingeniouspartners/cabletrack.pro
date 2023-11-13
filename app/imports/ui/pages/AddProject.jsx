import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/Projects';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  companyID: String,
  name: String,
  contract: String,
  bidNumber: String,
  jobNumber: String,
  jobFax: String,
  mailAddress: String,
  mailAddress2: String,
  mailCity: String,
  mailState: String,
  mailZip: String,
  mailCountry: String,
  shipAddress: String,
  shipAddress2: String,
  shipCity: String,
  shipState: String,
  shipZip: String,
  shipCountry: String,
  formEmail: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddProject = () => {
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { companyID, name, contract, bidNumber, jobNumber, jobFax, mailAddress, mailAddress2, mailCity, mailState, mailZip, mailCountry, shipAddress, shipAddress2, shipCity, shipZip, shipCountry, formEmail } = data;
    const owner = Meteor.user().username;
    Projects.collection.insert(
      { companyID, name, contract, bidNumber, jobNumber, jobFax, mailAddress, mailAddress2, mailCity, mailState, mailZip, mailCountry, shipAddress, shipAddress2, shipCity, shipZip, shipCountry, formEmail, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add Project</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="companyID" /></Col>
                  <Col><TextField name="name" /></Col>
                  <TextField name="contract" />
                  <TextField name="bidNumber" />
                  <TextField name="jobNumber" />
                  <TextField name="jobFax" />
                </Row>
                <TextField name="code" />
                <LongTextField name="associatedUsers" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
              <Link className="p-3" to="/projects">Back to Projects</Link>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProject;
