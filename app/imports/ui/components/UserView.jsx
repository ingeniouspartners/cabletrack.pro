import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilFill } from 'react-bootstrap-icons';
import { CombinePath, PathEditUser } from '../../api/navigation/Navigation';
import { PropTypeUser } from '../../api/propTypes/PropTypes';

const UserView = ({ user }) => {
  const editPath = CombinePath(PathEditUser, { userID: user._id });
  return (
    <Container className="p-5">
      <Card style={{ width: '18rem', margin: 'auto' }} className="">
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
          <Link to={editPath}><PencilFill /></Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

// Require a document to be passed to this component.
UserView.propTypes = {
  user: PropTypeUser.isRequired,
};

export default UserView;
