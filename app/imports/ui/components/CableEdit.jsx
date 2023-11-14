import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Cables } from '../../api/cable/Cables';

const bridge = new SimpleSchema2Bridge(Cables.schema);
/* Renders the EditStuff page for editing a single document. */
const CableEdit = (_cableId, doc) => {
  const submit = (data, formRef) => {
    const { description, refDrawingNo, refDrawingRev, system, building, zone, origination, termination, lengthPlanned, classification, cableType, conductors, voltageCable, voltageTest } = data;
    if (_cableId) {
      Cables.collection.update(_cableId, {
        $set: {
          description,
          refDrawingNo,
          refDrawingRev,
          system,
          building,
          zone,
          origination,
          termination,
          lengthPlanned,
          classification,
          cableType,
          conductors,
          voltageCable,
          voltageTest,
        },
      }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
    } else {
      Cables.collection.insert(
        {
          description,
          refDrawingNo,
          refDrawingRev,
          system,
          building,
          zone,
          origination,
          termination,
          lengthPlanned,
          classification,
          cableType,
          conductors,
          voltageCable,
          voltageTest,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        },
      );
    }
  };
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Cables</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} model={doc}>
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
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default CableEdit;
