import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField, DateField, BoolField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCablePullIn } from '../../api/propTypes/PropTypes';
import { CablePullIns } from '../../api/cable/CablePullIns';
import { PageEditCablePullIn } from '../../api/testcafe/TestCafe';

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
    <AutoForm id={PageEditCablePullIn} schema={bridge} onSubmit={data => submit(data)} model={pullin}>
      <Card>
        <Card.Header>
          <Card.Title>{pullin && pullin._id ? 'Edit' : 'Add'} CablePullIn</Card.Title>
        </Card.Header>
        <Card.Body>
          <TextField name="personInstalled" />
          <DateField name="dateInstalled" />
          <TextField name="lengthInstalled" />
          <BoolField name="pulledHand" />
          <TextField name="tugger" />
          <TextField name="tuggerCalibrationID" />
          <TextField name="maxPullingTension" />
          <SubmitField value="Submit" />
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
