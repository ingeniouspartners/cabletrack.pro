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

const bridge = new SimpleSchema2Bridge(Projects.formSchema);
/* Renders the EditStuff page for editing a single document. */
const ProjectEdit = ({ projectID, doc }) => {
  const company = Companies.collection.findOne({ name: 'Foo Company' });
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
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add / Edit Project</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="name" /></Col>
                  <TextField name="code" />
                </Row>
                <Row>
                  <Col><TextField name="contract" /></Col>
                  <Col><TextField name="bidNumber" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="jobPhone" /></Col>
                  <Col><TextField name="jobFax" /></Col>
                  <Col><TextField name="jobEmail" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="mailAddress.address" /></Col>
                </Row>
                <Row>
                  <TextField name="mailAddress.address2" />
                </Row>
                <Row>
                  <Col><TextField name="mailAddress.city" /></Col>
                  <Col><TextField name="mailAddress.state" /></Col>
                  <Col><TextField name="mailAddress.zip" /></Col>
                  <Col><TextField name="mailAddress.country" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress.address" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress.address2" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress.city" /></Col>
                  <Col><TextField name="shipAddress.state" /></Col>
                  <Col><TextField name="shipAddress.zip" /></Col>
                  <Col><TextField name="shipAddress.country" /></Col>
                </Row>
                <TextField name="notes" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
              <Link className="p-3" to={listProject}>Back to Projects</Link>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

ProjectEdit.propTypes = {
  projectID: PropTypes.string,
  doc: PropTypes.shape({
    companyID: PropTypes.string,
    code: PropTypes.string,
    name: PropTypes.string,
    contract: PropTypes.string,
    bidNumber: PropTypes.string,
    mailAddress: PropTypes.shape({
      address: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      country: PropTypes.string,
    }),
    shipAddress: PropTypes.shape({
      address: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      country: PropTypes.string,
    }),
    jobPhone: PropTypes.string,
    jobFax: PropTypes.string,
    jobEmail: PropTypes.string,
    notes: PropTypes.string,
    _id: PropTypes.string,
  }),
};

ProjectEdit.defaultProps = {
  doc: {}, // Provide a default value (empty object in this case)
  projectID: '',
};

export default ProjectEdit;
