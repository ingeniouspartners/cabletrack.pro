import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import { ParamCompanyID, PathListProject, CombinePath, PathViewProject, ParamProjectID } from '../../api/navigation/Navigation';
import { PropTypeProject } from '../../api/propTypes/PropTypes';
import { countryArray, stateArray } from '../../api/schema/FormSchemas';
import { NavListProject, PageEditProject } from '../../api/testcafe/TestCafe';

const bridge = new SimpleSchema2Bridge(Projects.formSchema);

/* Renders the EditStuff page for editing a single document. */
const ProjectEdit = ({ project }) => {
  const listPath = CombinePath(PathListProject, { [ParamCompanyID]: project.companyID });
  const viewPath = CombinePath(PathViewProject, { [ParamCompanyID]: project.companyID, [ParamProjectID]: project._id });
  const submit = (data) => {
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
          }
        },
      );
    }
  };

  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this project!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Projects.collection.remove(project._id, (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            // Optionally, you can redirect the user to the project list page or perform any other action
            window.location.href = listPath;
          }
        });
      }
    });
  };
  let fRef = null;
  return (
    <AutoForm id={PageEditProject} ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} model={project}>
      <Card>
        <Card.Header>
          <Row>
            <Col><Card.Title>{project && project._id ? 'Edit' : 'Add'} Project</Card.Title></Col>
            { project && project._id && (<Col md={3}><Link to={viewPath} className="p-3"><Button type="button">View Project</Button></Link></Col>)}
            { project && project._id && (
              <Col md={2}><button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button></Col>)}
          </Row>
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
            <Col><SelectField id="project-form-ship-state" name="shipAddress.state" allowedValues={stateArray} /></Col>
            <Col><TextField id="project-form-ship-zip" name="shipAddress.zip" /></Col>
            <Col><SelectField id="project-form-ship-country" name="shipAddress.country" allowedValues={countryArray} /></Col>
          </Row>
          <TextField id="project-form-notes" name="notes" />
          <SubmitField id="project-form-submit" value="Submit" />
          <ErrorsField />
        </Card.Body>
        <Link className="p-3" id={NavListProject} to={listPath}>Back to Projects</Link>
      </Card>
    </AutoForm>
  );
};

ProjectEdit.propTypes = {
  project: PropTypeProject.isRequired,
};

export default ProjectEdit;
