import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import * as CTPNav from '../../api/navigation/Navigation';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  companyID: String,
  code: String,
  name: String,
  contract: String,
  bidNumber: String,
  jobPhone: String,
  jobFax: String,
  jobEmail: String,
  notes: String,
  mailAddress: Object, // Combine mail address fields into a single object
  'mailAddress.address': String,
  'mailAddress.address2': String,
  'mailAddress.city': String,
  'mailAddress.state': String,
  'mailAddress.zip': String,
  'mailAddress.country': String,
  shipAddress: Object, // Combine ship address fields into a single object
  'shipAddress.address': String,
  'shipAddress.address2': String,
  'shipAddress.city': String,
  'shipAddress.state': String,
  'shipAddress.zip': String,
  'shipAddress.country': String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddProject = () => {
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { companyID, code, name, contract, bidNumber, mailAddress, shipAddress, jobPhone, jobFax, jobEmail, notes } = data;
    const owner = Meteor.user()._id;
    Projects.collection.insert(
      { companyID, name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes, owners: owner },
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
                  <TextField name="code" />
                </Row>
                <Row>
                  <Col><TextField name="contract" /></Col>
                  <Col><TextField name="bidNumber" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="jobPhone" /></Col>
                  <Col><TextField name="jobFax" /></Col>
                  <Col><TextField name="jobEmail" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="mailAddress.address" /></Col>
                </Row>
                <Row>
                  <TextField name="mailAddress.address2" />
                </Row>
                <Row>
                  <Col><TextField name="mailAddress.city" /></Col>
                  <Col><TextField name="mailAddress.state" /></Col>
                  <Col><TextField name="mailAddress.zip" /></Col>
                  <Col><TextField name="mailAddress.country" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress.address" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress.address2" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress.city" /></Col>
                  <Col><TextField name="shipAddress.state" /></Col>
                  <Col><TextField name="shipAddress.zip" /></Col>
                  <Col><TextField name="shipAddress.country" /></Col>
                </Row>
                <TextField name="notes" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
              <Link className="p-3" to={CTPNav.PathListProject}>Back to Projects</Link>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProject;
