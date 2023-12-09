import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, HiddenField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Link } from 'react-router-dom';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { Cables } from '../../api/cable/Cables';
import { ParamCompanyID, ParamProjectID, PathListCable, CombinePath } from '../../api/navigation/Navigation';
import { NavListCable, PageEditCable, ElementName, ElementProjectID, ElementCompanyID, ElementBuilding, ElementCableType, ElementClassification, ElementConductors, ElementCostCode, ElementDescription, ElementLengthPlanned, ElementNotes,
  ElementOrigination, ElementRefDrawingNo, ElementRefDrawingRev, ElementSystem, ElementTermination, ElementVoltageCable, ElementVoltageTest, ElementZone, ButtonSubmit } from '../../api/testcafe/TestCafe';

const bridge = new SimpleSchema2Bridge(Cables.formSchema);
/* Renders the EditStuff page for editing a single document. */
const CableEdit = ({ cable }) => {
  const listPath = CombinePath(PathListCable, { [ParamCompanyID]: cable.companyID, [ParamProjectID]: cable.projectID });
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
        swal('Success', 'Item updated successfully', 'success')));
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
          swal('Success', 'Item added successfully', 'success')),
      );
    }
  };
  return (
    <AutoForm id={PageEditCable} schema={bridge} onSubmit={data => submit(data)} model={cable}>
      <Card>
        <Card.Header>
          <Card.Title>{cable && cable._id ? 'Edit' : 'Add'} Cable</Card.Title>
        </Card.Header>
        <Card.Body>
          <TextField id={ElementName} name="name" />
          <TextField id={ElementDescription} name="description" />
          <TextField id={ElementCostCode} name="costCode" />
          <TextField id={ElementRefDrawingNo} name="refDrawingNo" />
          <TextField id={ElementRefDrawingRev} name="refDrawingRev" />
          <TextField id={ElementSystem} name="system" />
          <TextField id={ElementBuilding} name="building" />
          <TextField id={ElementZone} name="zone" />
          <TextField id={ElementOrigination} name="origination" />
          <TextField id={ElementTermination} name="termination" />
          <NumField id={ElementLengthPlanned} name="lengthPlanned" />
          <SelectField id={ElementClassification} name="classification" />
          <TextField id={ElementCableType} name="cableType" />
          <TextField id={ElementConductors} name="conductors" />
          <TextField id={ElementVoltageCable} name="voltageCable" />
          <TextField id={ElementVoltageTest} name="voltageTest" />
          <TextField id={ElementNotes} name="notes" />
          <SubmitField id={ButtonSubmit} value="Submit" />
          <ErrorsField />
          <HiddenField id={ElementCompanyID} name="companyID" />
          <HiddenField id={ElementProjectID} name="projectID" />
          <HiddenField name="_id" />
        </Card.Body>
        <Link id={NavListCable} className="p-3" to={listPath}>Back to Cables</Link>
      </Card>
    </AutoForm>
  );
};

CableEdit.propTypes = {
  cable: PropTypeCable.isRequired,
};

export default CableEdit;
