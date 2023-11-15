import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Projects } from '../../api/Projects';
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
                  <TextField name="contract" />
                  <TextField name="description" />
                  <TextField name="bidNumber" />
                  <TextField name="jobPhone" />
                  <TextField name="jobFax" />
                  <TextField name="mailAddress" />
                  <TextField name="mailAddress2" />
                  <TextField name="mailCity" />
                  <TextField name="mailState" />
                  <TextField name="mailZip" />
                  <TextField name="mailCountry" />
                  <TextField name="shipAddress" />
                  <TextField name="shipAddress2" />
                  <TextField name="shipCity" />
                  <TextField name="shipState" />
                  <TextField name="shipZip" />
                  <TextField name="shipCountry" />
                  <TextField name="formEmail" />
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
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
