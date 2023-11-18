import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Roles } from 'meteor/alanning:roles';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import { Navigate } from 'react-router-dom';
import { CablePullIns } from '../../api/cable/CablePullIns';
import { Cables } from '../../api/cable/Cables';
import { Projects } from '../../api/project/Projects';
import LoadingSpinner from '../components/LoadingSpinner';
import { PathNotFound, PathNotAuthorized } from '../../api/navigation/Navigation';
import { RoleViewCablePullInAll, RoleViewCablePullInOwned, RoleViewCablePullIn } from '../../api/role/Roles';
import CablePullInView from '../components/CablePullInView';

/* Renders the View Cable PullIn Page to show a single Cable PullIn */
const ViewCablePullIn = () => {
  // Gets the Parameters from the Path as named properties of an object.
  const params = useParams();
  console.log(`ViewCablePullIn: Company ${params.companyID}; Project ${params.projectID}; Cable ${params.cableID}; PullIn ${params._id}`);
  // Get the Cable PullIns based on the user's permissions. https://guide.meteor.com/react.html#using-withTracker
  const { doc, cable, project, ready, authorized } = useTracker(() => {
    // Get access to Cable PullIns documents.
    let auth = true;
    let subscription;
    if (Roles.userIsInRole(RoleViewCablePullInAll)) subscription = CablePullIns.subscribe(CablePullIns.adminPublicationName);
    if (Roles.userIsInRole(RoleViewCablePullInOwned)) subscription = CablePullIns.subscribe(CablePullIns.ownerPublicationName);
    if (Roles.userIsInRole(RoleViewCablePullIn)) subscription = CablePullIns.subscribe(CablePullIns.userPublicationName);
    if (!subscription) { auth = false; }
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = subscription.collection.findOne(params._id);
    const proj = Projects.findOne(params.projectID);
    const cbl = Cables.findOne(params.cableID);
    return {
      doc: document,
      cable: cbl,
      project: proj,
      ready: rdy,
      authorized: auth,
    };
  }, [params]);

  if (!doc) { return <Navigate to={PathNotFound} />; }
  if (!authorized) { return <Navigate to={PathNotAuthorized} />; }
  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <CablePullInView project={project} cable={cable} cablePullIn={doc} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ViewCablePullIn;
