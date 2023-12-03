import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilFill } from 'react-bootstrap-icons';
import { CombinePath, PathEditUser } from '../../api/navigation/Navigation';
import { PropTypeUserProfile } from '../../api/propTypes/PropTypes';
import { PageEditUser } from '../../api/testcafe/TestCafe';

const UserView = ({ user }) => {
  const editPath = CombinePath(PathEditUser, { userID: user._id });
  return (
    <Card>
      <Card.Img variant="top" src={user.picture} />
      <Card.Body>
        <Card.Title>{user.firstName} {user.lastName}</Card.Title>
        <Card.Subtitle>{user.username}</Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Emails: {user.emails}</ListGroup.Item>
        <ListGroup.Item>Address: {user.address}</ListGroup.Item>
        <ListGroup.Item>Services: {user.services}</ListGroup.Item>
        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
        <ListGroup.Item>Fax: {user.fax}</ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <Link id={PageEditUser} to={editPath}><PencilFill /></Link>
      </Card.Footer>
    </Card>
  );
};

// Require a document to be passed to this component.
UserView.propTypes = {
  user: PropTypeUserProfile.isRequired,
};

export default UserView;
