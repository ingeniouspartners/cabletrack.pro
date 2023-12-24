import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuardedNavLink = ({ id, roles, to, children }) => {
  const user = Meteor.user();
  const allowed = user && roles.some((role) => Roles.userIsInRole(user, role));
  return allowed ? <NavLink as={NavLink} id={id} to={to}>{children}</NavLink> : '';
};

GuardedNavLink.propTypes = {
  id: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(String).isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
};

export default GuardedNavLink;
