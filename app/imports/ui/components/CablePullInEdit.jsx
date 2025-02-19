import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { ValidatedForm, ErrorsField, HiddenField, SubmitField, TextField, DateField, BoolField, LongTextField, SelectField, NumField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCablePullIn } from '../../api/propTypes/PropTypes';
import { CablePullIns } from '../../api/cable/CablePullIns';
import {
  ButtonSubmit,
  FieldPersonInstalled,
  FieldLengthInstalled,
  FieldPulledHand,
  FieldTuggerCalibrationID,
  FieldMaxPullingTension,
  FieldDateInstalled,
  FieldTugger,
  FieldNotes,
  FieldCableID,
  FieldCompanyID,
  FieldProjectID,
  FieldPullInID,
} from '../../api/testcafe/TestCafe';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { RoleElectrician } from '../../api/role/Roles';

const bridge = new SimpleSchema2Bridge(CablePullIns.formSchema);

/* Renders the EditStuff page for editing a single document. */
const CablePullInEdit = ({ pullin }) => {
  const { companyElectricians } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Company Electricians documents.
    const companyElectriciansList = Meteor.users.find({ roles: RoleElectrician }).fetch();
    // Get the Cable documents
    return {
      companyElectricians: companyElectriciansList.map((electrician) => ({ label: electrician.username, value: electrician._id })),
    };
  }, [pullin]);


  const submit = (data) => {
    const { _id, personInstalled, dateInstalled, lengthInstalled, pulledHand, tugger, tuggerCalibrationID, maxPullingTension, companyID, projectID, cableID } = data;
    if (_id) {
      CablePullIns.collection.update(_id, { $set: { personInstalled, dateInstalled, lengthInstalled, pulledHand, tugger, tuggerCalibrationID, maxPullingTension } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'CablePullIn updated successfully', 'success').then(() => window.history.back())));
    } else {
      CablePullIns.collection.insert({ personInstalled, dateInstalled, lengthInstalled, pulledHand, tugger, tuggerCalibrationID, maxPullingTension, companyID, projectID, cableID }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'CablePullIn added successfully', 'success').then(() => window.history.back())));
    }
  };
  return (
    <ValidatedForm schema={bridge} onSubmit={data => submit(data)} model={pullin}>
      <Card>
        <Card.Header>
          <Card.Title>{pullin && pullin._id ? 'Edit' : 'Add'} Pull In</Card.Title>
        </Card.Header>
        <Card.Body>
          <SelectField id={FieldPersonInstalled} name="personInstalled" options={companyElectricians} />
          <DateField id={FieldDateInstalled} name="dateInstalled" />
          <NumField id={FieldLengthInstalled} name="lengthInstalled" />
          <BoolField id={FieldPulledHand} name="pulledHand" />
          <TextField id={FieldTugger} name="tugger" />
          <TextField id={FieldTuggerCalibrationID} name="tuggerCalibrationID" />
          <TextField id={FieldMaxPullingTension} name="maxPullingTension" />
          <LongTextField id={FieldNotes} name="notes" />
          <ErrorsField />
        </Card.Body>
        <Card.Footer>
          <SubmitField id={ButtonSubmit} value="Submit" />
          <HiddenField id={FieldPullInID} name="_id" />
          <HiddenField id={FieldCableID} name="cableID" />
          <HiddenField id={FieldProjectID} name="projectID" />
          <HiddenField id={FieldCompanyID} name="companyID" />
        </Card.Footer>
      </Card>
    </ValidatedForm>
  );
};

CablePullInEdit.propTypes = {
  pullin: PropTypeCablePullIn.isRequired,
};

export default CablePullInEdit;
