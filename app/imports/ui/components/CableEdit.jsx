import React from 'react';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, HiddenField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Link } from 'react-router-dom';
import { PropTypeCable } from '../../api/propTypes/PropTypes';
import { Cables } from '../../api/cable/Cables';
import { ParamCompanyID, ParamProjectID, PathListCable, CombinePath } from '../../api/navigation/Navigation';
import { NavListCable, PageEditCable } from '../../api/testcafe/TestCafe';

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
          <TextField id="cable-form-name" name="name" />
          <TextField id="cable-form-description" name="description" />
          <TextField id="cable-form-costCode" name="costCode" />
          <TextField id="cable-form-refDrawingNo" name="refDrawingNo" />
          <TextField id="cable-form-refDrawingRev" name="refDrawingRev" />
          <TextField id="cable-form-system" name="system" />
          <TextField id="cable-form-building" name="building" />
          <TextField id="cable-form-zone" name="zone" />
          <TextField id="cable-form-origination" name="origination" />
          <TextField id="cable-form-termination" name="termination" />
          <NumField id="cable-form-lengthPlanned" name="lengthPlanned" />
          <SelectField id="cable-form-classification" name="classification" />
          <TextField id="cable-form-cableType" name="cableType" />
          <TextField id="cable-form-conductors" name="conductors" />
          <TextField id="cable-form-voltageCable" name="voltageCable" />
          <TextField id="cable-form-voltageTest" name="voltageTest" />
          <TextField id="cable-form-notes" name="notes" />
          <SubmitField id="cable-form-submit" value="Submit" />
          <ErrorsField />
          <HiddenField name="companyID" />
          <HiddenField name="projectID" />
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
