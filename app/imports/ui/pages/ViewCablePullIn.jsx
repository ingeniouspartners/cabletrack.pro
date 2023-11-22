import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { Roles } from 'meteor/alanning:roles';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import { Navigate } from 'react-router-dom';
import { CablePullIns } from '../../api/cable/CablePullIns';
import { Cables } from '../../api/cable/Cables';
import { Projects } from '../../api/project/Projects';
import { Companies } from '../../api/company/Companies';
import LoadingSpinner from '../components/LoadingSpinner';
import { PathNotFound, PathNotAuthorized } from '../../api/navigation/Navigation';
import { RoleViewCablePullInAll, RoleViewCablePullInOwned, RoleViewCablePullIn } from '../../api/role/Roles';
import CablePullInView from '../components/CablePullInView';

/* Renders the View Cable PullIn Page to show a single Cable PullIn */
const ViewCablePullIn = () => {
  // Gets the Parameters from the Path as named properties of an object.
  const params = useParams();
  // Get the Cable PullIns based on the user's permissions. https://guide.meteor.com/react.html#using-withTracker
  const { pullin, cable, project, company, ready, authorized } = useTracker(() => {
    // Get access to Cable PullIns documents.
    let auth = true;
    let subscription;
    let rdy = false;
    let pin;
    let co;
    let proj;
    let cbl;
    if (Roles.userIsInRole(Meteor.userId(), RoleViewCablePullIn)) subscription = Meteor.subscribe(CablePullIns.userPublicationName);
    if (Roles.userIsInRole(Meteor.userId(), RoleViewCablePullInOwned)) subscription = Meteor.subscribe(CablePullIns.ownerPublicationName);
    if (Roles.userIsInRole(Meteor.userId(), RoleViewCablePullInAll)) subscription = Meteor.subscribe(CablePullIns.adminPublicationName);
    if (subscription) {
      // Determine if the subscription is ready
      rdy = subscription.ready();
      pin = CablePullIns.collection.findOne(params._id);
      co = Companies.collection.findOne(params.companyID);
      proj = Projects.collection.findOne(params.projectID);
      cbl = Cables.collection.findOne(params.cableID);
    } else { auth = false; }
    // Get the document
    return {
      pullin: pin,
      cable: cbl,
      project: proj,
      company: co,
      ready: rdy,
      authorized: auth,
    };
  }, [params]);

  if (ready && !authorized) { return <Navigate to={PathNotAuthorized} />; }
  if (ready && !pullin) { return <Navigate to={PathNotFound} />; }
  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <CablePullInView company={company} project={project} cable={cable} cablePullIn={pullin} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ViewCablePullIn;
