import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { PersonDashFill, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { CombinePath, PathHome, PathListCompany, PathListProject, PathSignIn, PathSignOut, PathSignUp, PathViewCompany, PathViewUser, ParamUserID } from '../../api/navigation/Navigation';
import { Companies } from '../../api/company/Companies';
import { CompaniesUsedBy } from '../../api/company/CompaniesUsedBys';
import LoadingSpinner from './LoadingSpinner';
import { NavListCompany, NavViewCompany, NavListProject, NavViewUser } from '../../api/testcafe/TestCafe';
import CompanyBrand from './CompanyBrand';
import { RoleListCompany, RoleListCompanyAll, RoleListProject, RoleListProjectAll, RoleListProjectOwned, RoleViewCompany, RoleViewCompanyAll } from '../../api/role/Roles';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { user, company, ready } = useTracker(() => {
    const currUser = Meteor.user();
    const companySub = Meteor.subscribe(Companies.userPublicationName);
    const usedBySub = Meteor.subscribe(CompaniesUsedBy.userPublicationName);
    const rdy = companySub.ready() && usedBySub.ready();
    const usedCompany = CompaniesUsedBy.collection.findOne();
    let currCompany;
    if (usedCompany) currCompany = Companies.collection.findOne(usedCompany._id);
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
            <Nav className="me-auto justify-content-start">
              {company ? (
                <>
                  <GuardedNavLink id={NavViewCompany} user={user} roles={[RoleViewCompanyAll, RoleViewCompany]} to={CombinePath(PathViewCompany, { companyID: (company ? company._id : '') })}>Company</GuardedNavLink>
                  <GuardedNavLink id={NavListProject} user={user} roles={[RoleListProjectAll, RoleListProjectOwned, RoleListProject]} to={CombinePath(PathListProject, { companyID: (company ? company._id : '') })}>Projects</GuardedNavLink>
                </>
              ) : ''}
              <GuardedNavLink id={NavListCompany} user={user} roles={[RoleListCompanyAll, RoleListCompany]} to={PathListCompany}>Companies</GuardedNavLink>
            </Nav>
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

export default NavBar;
