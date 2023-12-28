import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import { ParamCompanyID, PathListProject, CombinePath, PathViewProject, ParamProjectID } from '../../api/navigation/Navigation';
import { PropTypeProject } from '../../api/propTypes/PropTypes';
import { countryArray, stateArray } from '../../api/schema/FormSchemas';
import { ButtonSubmit, FieldAddress2, FieldCompanyID, FieldCountry, FieldName, FieldProjectID, FieldShipAddress, FieldShipAddress2, FieldShipCity, FieldShipZip, NavListProject } from '../../api/testcafe/TestCafe';

const bridge = new SimpleSchema2Bridge(Projects.formSchema);

/* Renders the EditStuff page for editing a single document. */
const ProjectEdit = ({ project }) => {
  const submit = (data) => {
    const { name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes, companyID } = data;
    if (project._id) {
      Projects.collection.update(project._id, {
        $set: {
          name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes, companyID },
      }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Project updated successfully', 'success').then(() => window.history.back())));
    } else {
      Projects.collection.insert(
        {
          name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes, companyID },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Project added successfully', 'success').then(() => window.history.back());
          }
        },
      );
    }
  };

  let fRef = null;
  return (
    <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} model={project}>
      <Card>
        <Card.Header>
          <Card.Title>{project && project._id ? 'Edit' : 'Add'} Project</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col><TextField id={FieldName} name="name" /></Col>
            <Col><TextField id={FieldCode} name="code" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldContract} name="contract" /></Col>
            <Col><TextField id={FieldBidNumber} name="bidNumber" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldPhone} name="jobPhone" /></Col>
            <Col><TextField id={FieldFax} name="jobFax" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldEmail} name="jobEmail" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldAddress} name="mailAddress.address" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldAddress2} name="mailAddress.address2" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldCity} name="mailAddress.city" /></Col>
            <Col><SelectField id={FieldState} name="mailAddress.state" allowedValues={stateArray} /></Col>
            <Col><TextField id={FieldZip} name="mailAddress.zip" /></Col>
            <Col><SelectField id={FieldCountry} name="mailAddress.country" allowedValues={countryArray} /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldShipAddress} name="shipAddress.address" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldShipAddress2} name="shipAddress.address2" /></Col>
          </Row>
          <Row>
            <Col><TextField id={FieldShipCity} name="shipAddress.city" /></Col>
            <Col><SelectField id={FieldShipState} name="shipAddress.state" allowedValues={stateArray} /></Col>
            <Col><TextField id={FieldShipZip} name="shipAddress.zip" /></Col>
            <Col><SelectField id={FieldShipCountry} name="shipAddress.country" allowedValues={countryArray} /></Col>
          </Row>
          <TextField id={FieldNotes} name="notes" />
          <ErrorsField />
        </Card.Body>
        <Card.Footer>
          <SubmitField id={ButtonSubmit} value="Submit" />
          <HiddenField id={FieldCompanyID} name="companyID" />
          <HiddenField id={FieldProjectID} name="_id" />
        </Card.Footer>
      </Card>
    </AutoForm>
  );
};

ProjectEdit.propTypes = {
  project: PropTypeProject.isRequired,
};

export default ProjectEdit;
