import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Cables } from '../../api/cable/Cables';
import LoadingSpinner from './LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Cables.schema);
// TODO Keep these files around until we confirm that the pages work.
/* Renders the EditStuff page for editing a single document. */
const CableEdit = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('CableEdit', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Cable documents.
    const subscription = Meteor.subscribe(Cables.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Cables.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { description, refDrawingNo, refDrawingRev, system, building, zone, origination, termination, lengthPlanned, classification, cableType, conductors, voltageCable, voltageTest } = data;
    Cables.collection.update(_id, { $set: { description, refDrawingNo, refDrawingRev, system, building, zone, origination, termination, lengthPlanned, classification, cableType, conductors, voltageCable, voltageTest } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Cables</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="description" />
                <TextField name="refDrawingNo" />
                <TextField name="refDrawingRev" />
                <TextField name="system" />
                <TextField name="building" />
                <TextField name="zone" />
                <TextField name="origination" />
                <TextField name="termination" />
                <NumField name="lengthPlanned" />
                <SelectField name="classification" />
                <TextField name="cableType" />
                <TextField name="conductors" />
                <TextField name="voltageCable" />
                <TextField name="voltageTest" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default CableEdit;
