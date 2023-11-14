/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import * as CTPRoles from '../../api/roles/Roles';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
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
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (ready ? (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />

          <Route path="/companies" element={<RoleProtectedRoute roles={[CTPRoles.RoleListCompanyAll]}><ListCompany /></RoleProtectedRoute>} />
          <Route path="/company/:company_id" element={<RoleProtectedRoute roles={[CTPRoles.RoleViewCompany, CTPRoles.RoleViewCompanyAll]}><ViewCompany /></RoleProtectedRoute>} />
          <Route path="/company/add" element={<RoleProtectedRoute roles={[CTPRoles.RoleAddCompany]}><EditCompany /></RoleProtectedRoute>} />
          <Route path="/company/:company_id/edit" element={<RoleProtectedRoute roles={[CTPRoles.RoleEditCompany, CTPRoles.RoleEditCompanyAll]}><EditCompany /></RoleProtectedRoute>} />
          <Route path="/company/:company_id/delete" element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteCompany, CTPRoles.RoleDeleteCompanyAll]}><EditCompany /></RoleProtectedRoute>} />

          <Route path="/users" element={<RoleProtectedRoute roles={[CTPRoles.RoleListUser, CTPRoles.RoleListUserAll]}><ListUser /></RoleProtectedRoute>} />
          <Route path="/user/:user_id" element={<RoleProtectedRoute roles={[CTPRoles.RoleViewUser, CTPRoles.RoleViewUserAll]}><ViewUser /></RoleProtectedRoute>} />
          <Route path="/user/add" element={<RoleProtectedRoute roles={[CTPRoles.RoleAddUser]}><EditUser /></RoleProtectedRoute>} />
          <Route path="/user/:user_id/edit" element={<RoleProtectedRoute roles={[CTPRoles.RoleEditUser, CTPRoles.RoleEditUserAll]}><EditUser /></RoleProtectedRoute>} />
          <Route path="/user/:user_id/delete" element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteUser, CTPRoles.RoleDeleteUserAll]}><EditUser /></RoleProtectedRoute>} />

          <Route path="/projects" element={<RoleProtectedRoute roles={[CTPRoles.RoleListProject, CTPRoles.RoleListProjectAll]}><ListProject /></RoleProtectedRoute>} />
          <Route path="/project/:project_id" element={<RoleProtectedRoute roles={[CTPRoles.RoleViewProject, CTPRoles.RoleViewProjectAll]}><ViewProject /></RoleProtectedRoute>} />
          <Route path="/project/add" element={<RoleProtectedRoute roles={[CTPRoles.RoleAddProject]}><EditProject /></RoleProtectedRoute>} />
          <Route path="/project/:project_id/edit" element={<RoleProtectedRoute roles={[CTPRoles.RoleEditProject, CTPRoles.RoleEditProjectAll]}><EditProject /></RoleProtectedRoute>} />
          <Route path="/project/:project_id/delete" element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteProject, CTPRoles.RoleDeleteProjectAll]}><EditProject /></RoleProtectedRoute>} />

          <Route path="/cables" element={<RoleProtectedRoute roles={[CTPRoles.RoleListCable, CTPRoles.RoleListCableAll]}><ListCable /></RoleProtectedRoute>} />
          <Route path="/cable/:cable_id" element={<RoleProtectedRoute roles={[CTPRoles.RoleViewCable, CTPRoles.RoleViewCableAll]}><ViewCable /></RoleProtectedRoute>} />
          <Route path="/cable/add" element={<RoleProtectedRoute roles={[CTPRoles.RoleAddCable]}><EditCable /></RoleProtectedRoute>} />
          <Route path="/cable/:cable_id/edit" element={<RoleProtectedRoute roles={[CTPRoles.RoleEditCable, CTPRoles.RoleEditCableAll]}><EditCable /></RoleProtectedRoute>} />
          <Route path="/cable/:cable_id/delete" element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteCable, CTPRoles.RoleDeleteCableAll]}><EditCable /></RoleProtectedRoute>} />

          <Route path="/cable/:cable_id/pullins" element={<RoleProtectedRoute roles={[CTPRoles.RoleListCablePullIn, CTPRoles.RoleListCablePullInAll]}><ListCablePullIn /></RoleProtectedRoute>} />
          <Route path="/cable/:cable_id/pullin/:pullin_id" element={<RoleProtectedRoute roles={[CTPRoles.RoleViewCablePullIn, CTPRoles.RoleViewCablePullInAll]}><ViewCablePullIn /></RoleProtectedRoute>} />
          <Route path="/cable/:cable_id/pullin/add" element={<RoleProtectedRoute roles={[CTPRoles.RoleAddCablePullIn]}><EditCablePullIn /></RoleProtectedRoute>} />
          <Route path="/cable/:cable_id/pullin/:pullin_id/edit" element={<RoleProtectedRoute roles={[CTPRoles.RoleEditCablePullIn, CTPRoles.RoleEditCablePullInAll]}><EditCablePullIn /></RoleProtectedRoute>} />
          <Route path="/cable/:cable_id/pullin/:pullin_id/delete" element={<RoleProtectedRoute roles={[CTPRoles.RoleDeleteCablePullIn, CTPRoles.RoleDeleteCablePullInAll]}><EditCablePullIn /></RoleProtectedRoute>} />

          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  ) : <LoadingSpinner />);
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to sign in page.
 * @param {any} { component: Component, ...rest }
 */
const RoleProtectedRoute = ({ roles, ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isInRole = Roles.userIsInRole(Meteor.userId(), roles);
  return (isLogged && isInRole) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each RoleProtectedRoute.
RoleProtectedRoute.propTypes = {
  roles: PropTypes.arrayOf(String).isRequired, ready: PropTypes.bool, children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

RoleProtectedRoute.defaultProps = {
  ready: false, children: <Landing />,
};

export default App;
