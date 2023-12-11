import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField, DateField, BoolField, LongTextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCablePullIn } from '../../api/propTypes/PropTypes';
import { CablePullIns } from '../../api/cable/CablePullIns';
import { ButtonSubmit, FieldPersonInstalled, FieldLengthInstalled, FieldPulledHand, FieldTuggerCalibrationID, FieldMaxPullingTension, FieldDateInstalled, FieldTugger, FieldNotes } from '../../api/testcafe/TestCafe';

const bridge = new SimpleSchema2Bridge(CablePullIns.formSchema);

/* Renders the EditStuff page for editing a single document. */
const CablePullInEdit = ({ pullin }) => {
  const submit = (data) => {
    const { _id, personInstalled, dateInstalled, lengthInstalled, pulledHand, tugger, tuggerCalibrationID, maxPullingTension, companyID, projectID, cableID } = data;
    if (_id) {
      CablePullIns.collection.update(_id, { $set: { personInstalled, dateInstalled, lengthInstalled, pulledHand, tugger, tuggerCalibrationID, maxPullingTension } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'CablePullIn updated successfully', 'success')));
    } else {
      CablePullIns.collection.insert({ personInstalled, dateInstalled, lengthInstalled, pulledHand, tugger, tuggerCalibrationID, maxPullingTension, companyID, projectID, cableID }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'CablePullIn added successfully', 'success')));
    }
  };
  return (
    <AutoForm schema={bridge} onSubmit={data => submit(data)} model={pullin}>
      <Card>
        <Card.Header>
          <Card.Title>{pullin && pullin._id ? 'Edit' : 'Add'} CablePullIn</Card.Title>
        </Card.Header>
        <Card.Body>
          <TextField id={FieldPersonInstalled} name="personInstalled" />
          <DateField id={FieldDateInstalled} name="dateInstalled" />
          <TextField id={FieldLengthInstalled} name="lengthInstalled" />
          <BoolField id={FieldPulledHand} name="pulledHand" />
          <TextField id={FieldTugger} name="tugger" />
          <TextField id={FieldTuggerCalibrationID} name="tuggerCalibrationID" />
          <TextField id={FieldMaxPullingTension} name="maxPullingTension" />
          <LongTextField id={FieldNotes} name="notes" />
          <SubmitField id={ButtonSubmit} value="Submit" />
          <ErrorsField />
          <HiddenField name="_id" />
          <HiddenField name="cableID" />
          <HiddenField name="projectID" />
          <HiddenField name="companyID" />
        </Card.Body>
      </Card>
    </AutoForm>
  );
};

CablePullInEdit.propTypes = {
  pullin: PropTypeCablePullIn.isRequired,
};

export default CablePullInEdit;
