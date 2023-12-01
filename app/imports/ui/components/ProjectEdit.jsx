import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import { Companies } from '../../api/company/Companies';
import { ParamCompanyID, PathListProject, CombinePath } from '../../api/navigation/Navigation';
import { PropTypeProject } from '../../api/propTypes/PropTypes';

const bridge = new SimpleSchema2Bridge(Projects.formSchema);
/* Renders the EditStuff page for editing a single document. */
const ProjectEdit = ({ projectID, doc, companyID }) => {
  const company = Companies.collection.findOne({ _id: companyID });
  const project = Projects.collection.findOne({ _id: projectID });
  const listProject = CombinePath(PathListProject, { [ParamCompanyID]: company._id });
  const submit = (data, formRef) => {
    const { name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes } = data;
    if (projectID) {
      Projects.collection.update(projectID, {
        $set: {
          companyID: project.companyID, name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes },
      }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
    } else {
      Projects.collection.insert(
        {
          companyID: company._id, name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes },
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
    <Container id="add-project-page" className="py-3">
      <Row id="edit-project-page" className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>{projectID ? 'Edit' : 'Add'} Project</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} model={doc}>
            <Card>
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
                  <Col><TextField id="project-form-mail-state" name="mailAddress.state" /></Col>
                  <Col><TextField id="project-form-mail-zip" name="mailAddress.zip" /></Col>
                  <Col><TextField id="project-form-mail-country" name="mailAddress.country" /></Col>
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
              <Link id="list-project-page" className="p-3" to={listProject}>Back to Projects</Link>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

ProjectEdit.propTypes = {
  projectID: PropTypes.string,
  doc: PropTypeProject.isRequired,
  companyID: PropTypes.string.isRequired,
};

ProjectEdit.defaultProps = {
  projectID: '',
};

export default ProjectEdit;
