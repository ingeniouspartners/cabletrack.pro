import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { PersonDashFill, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { CombinePath, PathHome, PathListCompany, PathListProject, PathSignIn, PathSignOut, PathSignUp, PathViewCompany, PathViewUser, ParamCompanyID, ParamUserID } from '../../api/navigation/Navigation';
import { Companies } from '../../api/company/Companies';
import LoadingSpinner from './LoadingSpinner';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { user, company, ready } = useTracker(() => {
    const currUser = Meteor.user();
    const companyId = currUser ? currUser.companyID : '';
    const companySub = Meteor.subscribe(Companies.adminPublicationName);
    const rdy = companySub.ready() && Roles.subscription.ready();
    const currCompany = Companies.collection.findOne(companyId);
    return {
      user: currUser,
      company: currCompany,
      ready: rdy,
    };
  }, []);

  return (
    ready ? (
      <Navbar id="navbar" className="text-white" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={PathHome}>
            {company ? (<h2 className="company-logo">{company.name}</h2>) : (<h2><Image className="app-logo" src="/images/logo.png" alt="CableTrack PRO" /></h2>)}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user ? (
              <Nav className="me-auto justify-content-start">
                {company ? (
                  <>
                    <Nav.Link id="view-company-nav" as={NavLink} to={CombinePath(PathViewCompany, company)}>Company</Nav.Link>
                    <Nav.Link id="list-project-nav" as={NavLink} to={CombinePath(PathListProject, company)}>Projects</Nav.Link>
                  </>
                ) : ''}
                <Nav.Link id="list-company-nav" as={NavLink} to={PathListCompany}>Companies</Nav.Link>
              </Nav>
            ) : ''}
            <Nav className="justify-content-end">
              {!user ? (
                <NavDropdown id="login-dropdown" title="Login">
                  <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to={PathSignIn}>
                    <PersonFill /> Sign in
                  </NavDropdown.Item>
                  <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to={PathSignUp}>
                    <PersonPlusFill /> Sign up
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown id="navbar-current-user" title={user.username}>
                  {!company || !user ? '' : (
                    <NavDropdown.Item id="navbar-profile" as={NavLink} to={CombinePath(PathViewUser, { [ParamCompanyID]: company._id, [ParamUserID]: user._id })}>
                      <PersonFill /> Profile
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item id="navbar-sign-out" as={NavLink} to={PathSignOut}>
                    <PersonDashFill /> Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ) : <LoadingSpinner />
  );
};

export default NavBar;
