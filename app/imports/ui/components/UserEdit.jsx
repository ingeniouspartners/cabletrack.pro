import React from 'react';
import swal from 'sweetalert';
import Meteor from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { FormSchemaUserProfile, stateArray } from '../../api/schema/FormSchemas';
import { PropTypeUserProfile } from '../../api/propTypes/PropTypes';

const bridge = new SimpleSchema2Bridge(FormSchemaUserProfile);
/* Renders the EditStuff page for editing a single document. */
const UserEdit = ({ user }) => {
  const submit = (data) => {
    const { username, firstName, lastName, address, phone, fax, picture } = data;
    Meteor.users.update(user._id, { $set: { username, firstName, lastName, address, phone, fax, picture },
    }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success').then(() => window.history.back())));
  };

  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit User</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)} model={user}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="username" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="firstName" /></Col>
                  <Col><TextField name="lastName" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="address.address" /></Col>
                </Row>
                <Row>
                  <TextField name="address.address2" />
                </Row>
                <Row>
                  <Col><TextField name="address.city" /></Col>
                  <Col><SelectField name="address.state" allowedValues={stateArray} /></Col>
                  <Col><TextField name="address.zip" /></Col>
                  <Col><TextField name="address.country" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="phone" /></Col>
                  <Col><TextField name="fax" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="picture" /></Col>
                </Row>
                <SubmitField id="project-form-submit" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

UserEdit.propTypes = {
  user: PropTypeUserProfile.isRequired,
};

export default UserEdit;
