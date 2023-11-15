/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import * as CTPRoles from '../../api/role/Roles';
import * as CTPNav from '../../api/navigation/Navigation';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import ListCompany from '../pages/ListCompany';
import EditCompany from '../pages/EditCompany';
import ViewCompany from '../pages/ViewCompany';
import ListUser from '../pages/ListUser';
import EditUser from '../pages/EditUser';
import ViewUser from '../pages/ViewUser';
import ListProject from '../pages/ListProject';
import EditProject from '../pages/EditProject';
import ViewProject from '../pages/ViewProject';
import ListCable from '../pages/ListCable';
import EditCable from '../pages/EditCable';
import ViewCable from '../pages/ViewCable';
import ListCablePullIn from '../pages/ListCablePullIn';
import ViewCablePullIn from '../pages/ViewCablePullIn';
import EditCablePullIn from '../pages/EditCablePullIn';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path={CTPNav.PathHome} element={<Landing />} />
        <Route path={CTPNav.PathSignIn} element={<SignIn />} />
        <Route path={CTPNav.PathSignUp} element={<SignUp />} />
        <Route path={CTPNav.PathSignOut} element={<SignOut />} />

        <Route path={CTPNav.PathListCompany} element={<RoleProtectedRoute roles={[CTPRoles.RoleListCompanyAll]}><ListCompany /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathViewCompany} element={<RoleProtectedRoute roles={[CTPRoles.RoleViewCompany, CTPRoles.RoleViewCompanyAll]}><ViewCompany /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathAddCompany} element={<RoleProtectedRoute roles={[CTPRoles.RoleAddCompany]}><EditCompany /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathEditCompany} element={<RoleProtectedRoute roles={[CTPRoles.RoleEditCompany, CTPRoles.RoleEditCompanyAll]}><EditCompany /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathDeleteCompany} element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteCompany, CTPRoles.RoleDeleteCompanyAll]}><EditCompany /></RoleProtectedRoute>} />

        <Route path={CTPNav.PathListProject} element={<RoleProtectedRoute roles={[CTPRoles.RoleListProject, CTPRoles.RoleListProjectOwned, CTPRoles.RoleListProjectAll]}><ListProject /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathViewProject} element={<RoleProtectedRoute roles={[CTPRoles.RoleViewProject, CTPRoles.RoleViewProjectOwned, CTPRoles.RoleViewProjectAll]}><ViewProject /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathAddProject} element={<RoleProtectedRoute roles={[CTPRoles.RoleAddProject]}><EditProject /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathEditProject} element={<RoleProtectedRoute roles={[CTPRoles.RoleEditProject, CTPRoles.RoleEditProjectOwned, CTPRoles.RoleEditProjectAll]}><EditProject /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathDeleteProject} element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteProject, CTPRoles.RoleDeleteProjectOwned, CTPRoles.RoleDeleteProjectAll]}><EditProject /></RoleProtectedRoute>} />

        <Route path={CTPNav.PathListCable} element={<RoleProtectedRoute roles={[CTPRoles.RoleListCable, CTPRoles.RoleListCableOwned, CTPRoles.RoleListCableAll]}><ListCable /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathViewCable} element={<RoleProtectedRoute roles={[CTPRoles.RoleViewCable, CTPRoles.RoleViewCableOwned, CTPRoles.RoleViewCableAll]}><ViewCable /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathAddCable} element={<RoleProtectedRoute roles={[CTPRoles.RoleAddCable]}><EditCable /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathEditCable} element={<RoleProtectedRoute roles={[CTPRoles.RoleEditCable, CTPRoles.RoleEditCableOwned, CTPRoles.RoleEditCableAll]}><EditCable /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathDeleteCable} element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteCable, CTPRoles.RoleDeleteCableOwned, CTPRoles.RoleDeleteCableAll]}><EditCable /></RoleProtectedRoute>} />

        <Route path={CTPNav.PathListCablePullIn} element={<RoleProtectedRoute roles={[CTPRoles.RoleListCablePullIn, CTPRoles.RoleListCablePullInOwned, CTPRoles.RoleListCablePullInAll]}><ListCablePullIn /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathViewCablePullIn} element={<RoleProtectedRoute roles={[CTPRoles.RoleViewCablePullIn, CTPRoles.RoleViewCablePullInOwned, CTPRoles.RoleViewCablePullInAll]}><ViewCablePullIn /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathAddCablePullIn} element={<RoleProtectedRoute roles={[CTPRoles.RoleAddCablePullIn]}><EditCablePullIn /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathEditCablePullIn} element={<RoleProtectedRoute roles={[CTPRoles.RoleEditCablePullIn, CTPRoles.RoleEditCablePullInOwned, CTPRoles.RoleEditCablePullInAll]}><EditCablePullIn /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathDeleteCablePullIn} element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteCablePullIn, CTPRoles.RoleDeleteCablePullInOwned, CTPRoles.RoleDeleteCablePullInAll]}><EditCablePullIn /></RoleProtectedRoute>} />

        <Route path={CTPNav.PathListUser} element={<RoleProtectedRoute roles={[CTPRoles.RoleListUser, CTPRoles.RoleListUserOwned, CTPRoles.RoleListUserAll]}><ListUser /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathViewUser} element={<RoleProtectedRoute roles={[CTPRoles.RoleViewUser, CTPRoles.RoleViewUserOwned, CTPRoles.RoleViewUserAll]}><ViewUser /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathAddUser} element={<RoleProtectedRoute roles={[CTPRoles.RoleAddUser]}><EditUser /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathEditUser} element={<RoleProtectedRoute roles={[CTPRoles.RoleEditUser, CTPRoles.RoleEditUserOwned, CTPRoles.RoleEditUserAll]}><EditUser /></RoleProtectedRoute>} />
        <Route path={CTPNav.PathDeleteUser} element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteUser, CTPRoles.RoleDeleteUserOwned, CTPRoles.RoleDeleteUserAll]}><EditUser /></RoleProtectedRoute>} />

        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to sign in page.
 * @param {any} { component: Component, ...rest }
 */
const RoleProtectedRoute = ({ roles, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  const isInRole = Roles.userIsInRole(Meteor.userId(), roles);
  return (isLogged && isInRole) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each RoleProtectedRoute.
RoleProtectedRoute.propTypes = {
  roles: PropTypes.arrayOf(String).isRequired, children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

RoleProtectedRoute.defaultProps = {
  children: <Landing />,
};

export default App;
