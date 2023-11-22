import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { PersonDashFill, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { PathHome, PathListCompany, PathSignIn, PathSignOut, PathSignUp, PathViewCompany, PathListProject, PathViewUser } from '../../api/navigation/Navigation';
// import { RoleListProject, RoleListProjectAll, RoleListProjectOwned, RoleViewCompany, RoleListCompanyAll, RoleListCompany } from '../../api/role/Roles';
import LoadingSpinner from './LoadingSpinner';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, currentUser } = useTracker(() => {
    const sub = Roles.subscription;
    const rdy = sub.ready();
    return { ready: rdy, currentUser: Meteor.user() };
  });
  return (ready ? (
    <Navbar id="navbar" className="text-white" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={PathHome}>
          <h2><Image src="/images/logo.png" alt="CableTrack PRO" /></h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            <Nav.Link id="list-company-nav" as={NavLink} to={PathListCompany} key="listCompany">Companies</Nav.Link>
            <Nav.Link id="view-company-nav" as={NavLink} to={PathViewCompany} key="viewCompany">Company</Nav.Link>
            <Nav.Link id="list-project-nav" as={NavLink} to={PathListProject} key="listProject">Projects</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {!currentUser ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to={PathSignIn}>
                  <PersonFill />&nbsp;Sign&nbsp;in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to={PathSignUp}>
                  <PersonPlusFill />&nbsp;Sign&nbsp;up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser.username}>
                <NavDropdown.Item id="navbar-profile" as={NavLink} to={PathViewUser}>
                  <PersonFill />&nbsp;Profile
                </NavDropdown.Item>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to={PathSignOut}>
                  <PersonDashFill />&nbsp;Sign&nbsp;out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : <LoadingSpinner />);
};

export default NavBar;
