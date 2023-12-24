import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { PersonDashFill, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { CombinePath, PathListUser, PathHome, PathListCompany, PathListProject, PathSignIn, PathSignOut, PathSignUp, PathViewCompany, PathViewUser, ParamUserID } from '../../api/navigation/Navigation';
import { Companies } from '../../api/company/Companies';
import { CompaniesUsedBy } from '../../api/company/CompaniesUsedBys';
import LoadingSpinner from './LoadingSpinner';
import { NavListCompany, NavViewCompany, NavListProject, NavViewUser, NavListUser } from '../../api/testcafe/TestCafe';
import CompanyBrand from './CompanyBrand';
import { RoleListUserAll, RoleListUserOwned, RoleListCompanyAll, RoleListCompanyOwned, RoleListProjectAll, RoleListProjectOwned,
  RoleListProjectUsed, RoleViewCompanyAll, RoleViewCompanyOwned, RoleViewCompanyUsed } from '../../api/role/Roles';
import GuardedNavLink from './GuardedNavLink';

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
      <Navbar id="navbar" className="text-white justify-content-start" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={PathHome}>
            <CompanyBrand company={company} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              {company ? (
                <>
                  <GuardedNavLink id={NavViewCompany} roles={[RoleViewCompanyAll, RoleViewCompanyOwned, RoleViewCompanyUsed]} to={CombinePath(PathViewCompany, { companyID: (company ? company._id : '') })}>
                    <span className="px-2">Company</span>
                  </GuardedNavLink>
                  <GuardedNavLink id={NavListProject} user={user} roles={[RoleListProjectAll, RoleListProjectOwned, RoleListProjectUsed]} to={CombinePath(PathListProject, { companyID: (company ? company._id : '') })}>
                    <span className="px-2">Projects</span>
                  </GuardedNavLink>
                </>
              ) : ''}
              <GuardedNavLink id={NavListCompany} user={user} roles={[RoleListCompanyAll, RoleListCompanyOwned]} to={PathListCompany}><span className="px-2">Companies</span></GuardedNavLink>
              <GuardedNavLink id={NavListUser} user={user} roles={[RoleListUserAll, RoleListUserOwned]} to={PathListUser}><span className="px-2">Users</span></GuardedNavLink>
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

export default NavBar;
