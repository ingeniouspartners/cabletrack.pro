import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const GuardedNavLink = ({ id, roles, to, children }) => {
  const user = Meteor.user();
  const allowed = user && roles.some((role) => Roles.userIsInRole(user, role));
  return allowed ? <Nav.Link id={id} as={NavLink} to={to}>{children}</Nav.Link> : '';
};

GuardedNavLink.propTypes = {
  id: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(String).isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default GuardedNavLink;
