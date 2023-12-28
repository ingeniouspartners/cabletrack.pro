import React from 'react';
import swal from 'sweetalert';
import { Card, Row, Col } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField, LongTextField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { Cables } from '../../api/cable/Cables';
import {
  ButtonSubmit,
  FieldBuilding,
  FieldCableID,
  FieldCableType,
  FieldClassification,
  FieldCompanyID,
  FieldConductors,
  FieldCostCode,
  FieldDescription,
  FieldLengthPlanned,
  FieldName,
  FieldNotes,
  FieldOrigination,
  FieldProjectID,
  FieldRefDrawingNo,
  FieldRefDrawingRev,
  FieldSystem,
  FieldTermination,
  FieldVoltageCable,
  FieldVoltageTest,
  FieldZone,
} from '../../api/testcafe/TestCafe';

const bridge = new SimpleSchema2Bridge(Cables.formSchema);

/**
 * Renders the page for adding or editing a single cable.
 * @param cable
 * @returns {Element}
 * @constructor
 */
const CableEdit = ({ cable }) => {

  const submit = (data) => {
    // eslint-disable-next-line max-len
    const { _id, companyID, projectID, name, description, costCode, refDrawingNo, refDrawingRev, system, building, zone, origination, termination, lengthPlanned, classification, cableType, conductors, voltageCable, voltageTest, notes }
      = data;
    if (_id) {
      Cables.collection.update(_id, {
        $set: {
          companyID,
          projectID,
          name,
          description,
          costCode,
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
          notes,
        },
      }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Cable updated successfully', 'success').then(() => window.history.back())));
    } else {
      Cables.collection.insert(
        {
          companyID,
          projectID,
          name,
          description,
          costCode,
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
          notes,
        },
        (error) => (error ?
          swal('Error', error.message, 'error') :
          swal('Success', 'Cable added successfully', 'success').then(() => window.history.back())),
      );
    }
  };
  return (
    <AutoForm schema={bridge} onSubmit={data => submit(data)} model={cable}>
      <Card>
        <Card.Header>
          <Card.Title>{cable && cable._id ? 'Edit' : 'Add'} Cable</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col><TextField id={FieldName} name="name" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldDescription} name="description" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldCostCode} name="costCode" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldRefDrawingNo} name="refDrawingNo" /></Col>
            <Col><TextField id={FieldRefDrawingRev} name="refDrawingRev" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldSystem} name="system" /></Col>
            <Col><TextField id={FieldBuilding} name="building" /></Col>
            <Col><TextField id={FieldZone} name="zone" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldOrigination} name="origination" /></Col>
            <Col><TextField id={FieldTermination} name="termination" /></Col>
          </Row>
          <Row>
            <Col><NumField id={FieldLengthPlanned} name="lengthPlanned" /></Col>
            <Col><SelectField id={FieldClassification} name="classification" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldCableType} name="cableType" /></Col>
            <Col><TextField id={FieldConductors} name="conductors" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldVoltageCable} name="voltageCable" /></Col>
            <Col><TextField id={FieldVoltageTest} name="voltageTest" /></Col>
          </Row>
          <LongTextField id={FieldNotes} name="notes" />
          <ErrorsField />
        </Card.Body>
        <Card.Footer>
          <SubmitField id={ButtonSubmit} value="Submit" />
          <HiddenField id={FieldCompanyID} name="companyID" />
          <HiddenField id={FieldProjectID} name="projectID" />
          <HiddenField id={FieldCableID} name="_id" />
        </Card.Footer>
      </Card>
    </AutoForm>
  );
};

CableEdit.propTypes = {
  cable: PropTypeCable.isRequired,
};

export default CableEdit;
