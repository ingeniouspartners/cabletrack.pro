import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField, LongTextField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { Cables } from '../../api/cable/Cables';
import { CombinePath, ParamCompanyID, ParamProjectID, PathListCable } from '../../api/navigation/Navigation';
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
  NavListCable,
} from '../../api/testcafe/TestCafe';
import GuardedNavLink from './GuardedNavLink';
import { RoleListCableAll, RoleListCableOwned, RoleListCableUsed } from '../../api/role/Roles';

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
        swal('Success', 'Cable updated successfully', 'success')));
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
          swal('Success', 'Cable added successfully', 'success')),
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
          <TextField id={FieldName} name="name" />
          <TextField id={FieldDescription} name="description" />
          <TextField id={FieldCostCode} name="costCode" />
          <TextField id={FieldRefDrawingNo} name="refDrawingNo" />
          <TextField id={FieldRefDrawingRev} name="refDrawingRev" />
          <TextField id={FieldSystem} name="system" />
          <TextField id={FieldBuilding} name="building" />
          <TextField id={FieldZone} name="zone" />
          <TextField id={FieldOrigination} name="origination" />
          <TextField id={FieldTermination} name="termination" />
          <NumField id={FieldLengthPlanned} name="lengthPlanned" />
          <SelectField id={FieldClassification} name="classification" />
          <TextField id={FieldCableType} name="cableType" />
          <TextField id={FieldConductors} name="conductors" />
          <TextField id={FieldVoltageCable} name="voltageCable" />
          <TextField id={FieldVoltageTest} name="voltageTest" />
          <LongTextField id={FieldNotes} name="notes" />
          <SubmitField id={ButtonSubmit} value="Submit" />
          <ErrorsField />
          <HiddenField id={FieldCompanyID} name="companyID" />
          <HiddenField id={FieldProjectID} name="projectID" />
          <HiddenField id={FieldCableID} name="_id" />
        </Card.Body>
        <Card.Footer>
          <GuardedNavLink roles={[RoleListCableAll, RoleListCableOwned, RoleListCableUsed]} id={NavListCable} to={listPath}><span className="px-2">Cables</span></GuardedNavLink>
        </Card.Footer>
      </Card>
    </AutoForm>
  );
};

CableEdit.propTypes = {
  cable: PropTypeCable.isRequired,
};

export default CableEdit;
