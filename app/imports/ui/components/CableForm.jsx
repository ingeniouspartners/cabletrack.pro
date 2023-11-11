import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Cables } from '../../api/cable/Cables';
import { cableSchema } from '../../api/schema/Schemas';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = cableSchema;

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddCable component for adding a cable. */
const AddCable = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { description, refDrawingNo, refDrawingRev, system, building, zone, origination, termination, lengthPlanned, classification, cableType, conductors, voltageCable, voltageTest } = data;
    const owner = Meteor.user().username;
    Cables.collection.insert(
      { description, refDrawingNo, refDrawingRev, system, building, zone, origination, termination, lengthPlanned, classification, cableType, conductors, voltageCable, voltageTest, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Cable added successfully', 'success');
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
        <Col xs={5}>
          <Col className="text-center"><h2>Add Cable</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="description" />
                <TextField name="refDrawingNo" />
                <TextField name="refDrawingRev" />
                <TextField name="system" />
                <TextField name="building" />
                <TextField name="zone" />
                <TextField name="origination" />
                <TextField name="termination" />
                <NumField name="lengthPlanned" />
                <SelectField name="classification" />
                <TextField name="cableType" />
                <TextField name="conductors" />
                <TextField name="voltageCable" />
                <TextField name="voltageTest" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCable;
