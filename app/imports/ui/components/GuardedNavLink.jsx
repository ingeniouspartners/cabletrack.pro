import { Roles } from 'meteor/alanning:roles';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const GuardedNavLink = ({ id, user, roles, to, children }) => {
  const allowed = user && roles.some((role) => Roles.userIsInRole(user, role));
  return allowed ? <Nav.Link id={id} as={NavLink} to={to}>{children}</Nav.Link> : '';
};

GuardedNavLink.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.objectOf(Object),
  roles: PropTypes.arrayOf(String).isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

GuardedNavLink.defaultProps = {
  user: undefined,
};

export default GuardedNavLink;
