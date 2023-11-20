import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Companies } from '../../api/company/Companies';
import LoadingSpinner from '../components/LoadingSpinner';
import PropTypes from 'prop-types';
import CompanyView from './CompanyView';

const bridge = new SimpleSchema2Bridge(Companies.schema);

/* Renders the EditStuff page for editing a single document. */
const CompanyEdit = (company) => {
  const submit = (data) => {
    const { name, code, associatedUsers } = data;
    Companies.collection.update(_id, { $set: { name, associatedUsers } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Company</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="name"/></Col>
                </Row>
                <TextField name="associatedUsers"/>
                <SubmitField value="Submit"/>
                <ErrorsField/>
                <HiddenField name="owner"/>
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};
CompanyEdit.propTypes = {
  company: PropTypes.arrayOf(Object),
};
export default CompanyEdit;
