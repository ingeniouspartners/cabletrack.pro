import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import { ParamCompanyID, PathListProject, CombinePath } from '../../api/navigation/Navigation';
import { PropTypeProject } from '../../api/propTypes/PropTypes';
import { countryArray, stateArray } from '../../api/schema/FormSchemas';

const bridge = new SimpleSchema2Bridge(Projects.formSchema);
/* Renders the EditStuff page for editing a single document. */
const ProjectEdit = ({ project }) => {
  const listPath = CombinePath(PathListProject, { [ParamCompanyID]: project.companyID });
  const submit = (data, formRef) => {
    const { name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes, companyID } = data;
    if (project._id) {
      Projects.collection.update(project._id, {
        $set: {
          name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes, companyID },
      }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Project updated successfully', 'success')));
    } else {
      Projects.collection.insert(
        {
          name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes, companyID },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Project added successfully', 'success');
            formRef.reset();
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
          <Card.Title>{project && project._id ? 'Edit' : 'Add'} CablePullIn</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col><TextField id="project-form-name" name="name" /></Col>
            <TextField id="project-form-code" name="code" />
          </Row>
          <Row>
            <Col><TextField id="project-form-contract" name="contract" /></Col>
            <Col><TextField id="project-form-bidNumber" name="bidNumber" /></Col>
          </Row>
          <Row>
            <Col><TextField id="project-form-jobPhone" name="jobPhone" /></Col>
            <Col><TextField id="project-form-jobFax" name="jobFax" /></Col>
            <Col><TextField id="project-form-jobEmail" name="jobEmail" /></Col>
          </Row>
          <Row>
            <Col><TextField id="project-form-mail-address" name="mailAddress.address" /></Col>
          </Row>
          <Row>
            <TextField id="project-form-mail-address2" name="mailAddress.address2" />
          </Row>
          <Row>
            <Col><TextField id="project-form-mail-city" name="mailAddress.city" /></Col>
            <Col><SelectField id="project-form-mail-state" name="mailAddress.state" allowedValues={stateArray} /></Col>
            <Col><TextField id="project-form-mail-zip" name="mailAddress.zip" /></Col>
            <Col><SelectField id="project-form-mail-country" name="mailAddress.country" allowedValues={countryArray} /></Col>
          </Row>
          <Row>
            <Col><TextField id="project-form-ship-address" name="shipAddress.address" /></Col>
          </Row>
          <Row>
            <Col><TextField id="project-form-ship-address2" name="shipAddress.address2" /></Col>
          </Row>
          <Row>
            <Col><TextField id="project-form-ship-city" name="shipAddress.city" /></Col>
            <Col><TextField id="project-form-ship-state" name="shipAddress.state" /></Col>
            <Col><TextField id="project-form-ship-zip" name="shipAddress.zip" /></Col>
            <Col><TextField id="project-form-ship-country" name="shipAddress.country" /></Col>
          </Row>
          <TextField id="project-form-notes" name="notes" />
          <SubmitField id="project-form-submit" value="Submit" />
          <ErrorsField />
        </Card.Body>
        <Link id="list-project-page" className="p-3" to={listPath}>Back to Projects</Link>
      </Card>
    </AutoForm>
  );
};

ProjectEdit.propTypes = {
  project: PropTypeProject.isRequired,
};

export default ProjectEdit;
