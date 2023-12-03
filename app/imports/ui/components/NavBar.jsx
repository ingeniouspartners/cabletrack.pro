import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { PersonDashFill, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { CombinePath, PathHome, PathListCompany, PathListProject, PathSignIn, PathSignOut, PathSignUp, PathViewCompany, PathViewUser, ParamUserID } from '../../api/navigation/Navigation';
import { Companies } from '../../api/company/Companies';
import LoadingSpinner from './LoadingSpinner';
import { NavListCompany, NavViewCompany, NavListProject, NavViewUser } from '../../api/testcafe/TestCafe';
import CompanyBrand from './CompanyBrand';

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
            <CompanyBrand company={company} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user ? (
              <Nav className="me-auto justify-content-start">
                {company ? (
                  <>
                    <Nav.Link id={NavViewCompany} as={NavLink} to={CombinePath(PathViewCompany, company)}>Company</Nav.Link>
                    <Nav.Link id={NavListProject} as={NavLink} to={CombinePath(PathListProject, company)}>Projects</Nav.Link>
                  </>
                ) : ''}
                <Nav.Link id={NavListCompany} as={NavLink} to={PathListCompany}>Companies</Nav.Link>
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
                  { !user ? '' : (
                    <NavDropdown.Item id={NavViewUser} as={NavLink} to={CombinePath(PathViewUser, { [ParamUserID]: user._id })}>
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
