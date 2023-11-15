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

const bridge = new SimpleSchema2Bridge(Projects.schema);

/* Renders the EditStuff page for editing a single document. */
const EditProject = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Projects.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Projects.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { companyID, name, description, contract, bidNumber, jobPhone, jobFax, mailAddress, mailAddress2, mailCity, mailState, mailZip, mailCountry, shipAddress, shipAddress2, shipCity, shipState, shipZip, shipCountry, formEmail } = data;
    // eslint-disable-next-line max-len
    Projects.collection.update(_id, { $set: { companyID, name, description, contract, bidNumber, jobPhone, jobFax, mailAddress, mailAddress2, mailCity, mailState, mailZip, mailCountry, shipAddress, shipAddress2, shipCity, shipState, shipZip, shipCountry, formEmail } }, (error) => (error ?
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
                  <TextField name="description" />
                </Row>
                <Row>
                  <Col><TextField name="bidNumber" /></Col>
                  <Col><TextField name="contract" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="jobPhone" /></Col>
                  <Col><TextField name="jobFax" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="mailAddress" /></Col>
                </Row>
                <Row>
                  <TextField name="mailAddress2" />
                </Row>
                <Row>
                  <Col><TextField name="mailCity" /></Col>
                  <Col><TextField name="mailState" /></Col>
                  <Col><TextField name="mailZip" /></Col>
                  <Col><TextField name="mailCountry" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipAddress2" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="shipCity" /></Col>
                  <Col><TextField name="shipState" /></Col>
                  <Col><TextField name="shipZip" /></Col>
                  <Col><TextField name="shipCountry" /></Col>
                </Row>
                <TextField name="formEmail" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owners" />
              </Card.Body>
              <Link className="p-3" to={`/project/${_id}`}>Back to Project</Link>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditProject;
