import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import * as CTPRoles from '../../api/role/Roles';
import * as CTPNav from '../../api/navigation/Navigation';
import LoadingSpinner from '../components/LoadingSpinner';
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
const App = () => {
  const { user, ready } = useTracker(() => {
    const currUser = Meteor.user();
    const rdy = Roles.subscription.ready();
    return {
      user: currUser,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path={CTPNav.PathHome} element={<Landing />} />
          <Route path={CTPNav.PathSignIn} element={<SignIn />} />
          <Route path={CTPNav.PathSignUp} element={<SignUp />} />
          <Route path={CTPNav.PathSignOut} element={<SignOut />} />

          <Route path={CTPNav.PathListCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListCompanyUsed, CTPRoles.RoleListCompanyUsed, CTPRoles.RoleListCompanyAll]}><ListCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewCompanyUsed, CTPRoles.RoleViewCompanyOwned, CTPRoles.RoleViewCompanyAll]}><ViewCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddCompany]}><EditCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditCompanyUsed, CTPRoles.RoleEditCompanyOwned, CTPRoles.RoleEditCompanyAll]}><EditCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteCompanyAll]}><EditCompany /></RoleProtectedRoute>} />

          <Route path={CTPNav.PathListProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListProjectUsed, CTPRoles.RoleListProjectUsed, CTPRoles.RoleListProjectAll]}><ListProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewProjectUsed, CTPRoles.RoleViewProjectOwned, CTPRoles.RoleViewProjectAll]}><ViewProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddProject]}><EditProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditProjectUsed, CTPRoles.RoleEditProjectOwned, CTPRoles.RoleEditProjectAll]}><EditProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteProjectOwned, CTPRoles.RoleDeleteProjectAll]}><EditProject /></RoleProtectedRoute>} />

          <Route path={CTPNav.PathListCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListCableUsed, CTPRoles.RoleListCableUsed, CTPRoles.RoleListCableAll]}><ListCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewCableUsed, CTPRoles.RoleViewCableOwned, CTPRoles.RoleViewCableAll]}><ViewCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddCable]}><EditCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditCableUsed, CTPRoles.RoleEditCableOwned, CTPRoles.RoleEditCableAll]}><EditCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteCableOwned, CTPRoles.RoleDeleteCableAll]}><EditCable /></RoleProtectedRoute>} />

          <Route path={CTPNav.PathListCablePullIn} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListCablePullInUsed, CTPRoles.RoleListCablePullInUsed, CTPRoles.RoleListCablePullInAll]}><ListCablePullIn /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewCablePullIn} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewCablePullInUsed, CTPRoles.RoleViewCablePullInOwned, CTPRoles.RoleViewCablePullInAll]}><ViewCablePullIn /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddCablePullIn} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddCablePullIn]}><EditCablePullIn /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditCablePullIn} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditCablePullInUsed, CTPRoles.RoleEditCablePullInOwned, CTPRoles.RoleEditCablePullInAll]}><EditCablePullIn /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteCablePullIn} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteCablePullInOwned, CTPRoles.RoleDeleteCablePullInAll]}><EditCablePullIn /></RoleProtectedRoute>} />

          <Route path={CTPNav.PathListUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListUserOwned, CTPRoles.RoleListUserAll]}><ListUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewUserSelf, CTPRoles.RoleViewUserOwned, CTPRoles.RoleViewUserAll]}><ViewUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddUser]}><EditUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditUserSelf, CTPRoles.RoleEditUserOwned, CTPRoles.RoleEditUserAll]}><EditUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteUserOwned, CTPRoles.RoleDeleteUserAll]}><EditUser /></RoleProtectedRoute>} />

          <Route path={CTPNav.PathNotAuthorized} element={<NotAuthorized />} />
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
const RoleProtectedRoute = ({ user, roles, children }) => {
  if (user) {
    const isInRole = roles.some((role) => Roles.userIsInRole(user, role));
    // eslint-disable-next-line no-console
    return (isInRole) ? children : <Navigate to={CTPNav.PathNotAuthorized} />;
  }
  return <Navigate to={CTPNav.PathSignIn} />;
};

// Require a component and location to be passed to each RoleProtectedRoute.
RoleProtectedRoute.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  roles: PropTypes.arrayOf(String).isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

RoleProtectedRoute.defaultProps = {
  user: {},
  children: <Landing />,
};

export default App;
