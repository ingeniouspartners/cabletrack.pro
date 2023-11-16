import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/project/Projects';
import LoadingSpinner from '../components/LoadingSpinner';
import * as CTPNav from '../../api/navigation/Navigation';
import { ParamProjectID } from '../../api/navigation/Navigation';

const bridge = new SimpleSchema2Bridge(Projects.schema);

/* Renders the EditStuff page for editing a single document. */
const EditProject = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { project_id } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Projects.collection.findOne(project_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [project_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { companyID, name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes } = data;
    // eslint-disable-next-line max-len
    Projects.collection.update(project_id, { $set: { companyID, name, code, contract, bidNumber, jobPhone, jobFax, mailAddress, shipAddress, jobEmail, notes } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Project</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="companyID" /></Col>
                  <Col><TextField name="name" /></Col>
                  <TextField name="code" />
                </Row>
                <Row>
                  <Col><TextField name="bidNumber" /></Col>
                  <Col><TextField name="contract" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="jobPhone" /></Col>
                  <Col><TextField name="jobFax" /></Col>
                  <Col><TextField name="jobEmail" /></Col>
                </Row>
                <h5>Mail Address</h5>
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
                <h5>Ship Address</h5>
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
                <HiddenField name="owners" />
              </Card.Body>
              <Link to={CTPNav.PathViewProject.replace(`:${ParamProjectID}`, project_id)} className="p-3">Back to Project</Link>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditProject;
