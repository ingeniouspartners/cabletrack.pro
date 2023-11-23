import React, { lazy } from 'react';
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

const Landing = lazy(() => import('../pages/Landing'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignOut = lazy(() => import('../pages/SignOut'));
const SignIn = lazy(() => import('../pages/SignIn'));
const NotAuthorized = lazy(() => import('../pages/NotAuthorized'));
const ListCompany = lazy(() => import('../pages/ListCompany'));
const EditCompany = lazy(() => import('../pages/EditCompany'));
const ViewCompany = lazy(() => import('../pages/ViewCompany'));
const ListUser = lazy(() => import('../pages/ListUser'));
const EditUser = lazy(() => import('../pages/EditUser'));
const ViewUser = lazy(() => import('../pages/ViewUser'));
const ListProject = lazy(() => import('../pages/ListProject'));
const EditProject = lazy(() => import('../pages/EditProject'));
const ViewProject = lazy(() => import('../pages/ViewProject'));
const ListCable = lazy(() => import('../pages/ListCable'));
const EditCable = lazy(() => import('../pages/EditCable'));
const ViewCable = lazy(() => import('../pages/ViewCable'));
const ListCablePullIn = lazy(() => import('../pages/ListCablePullIn'));
const ViewCablePullIn = lazy(() => import('../pages/ViewCablePullIn'));
const EditCablePullIn = lazy(() => import('../pages/EditCablePullIn'));

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

          <Route path={CTPNav.PathListCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListCompanyAll]}><ListCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewCompany, CTPRoles.RoleViewCompanyAll]}><ViewCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddCompany]}><EditCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditCompany, CTPRoles.RoleEditCompanyAll]}><EditCompany /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteCompany} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteCompany, CTPRoles.RoleDeleteCompanyAll]}><EditCompany /></RoleProtectedRoute>} />

          <Route path={CTPNav.PathListProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListProject, CTPRoles.RoleListProjectOwned, CTPRoles.RoleListProjectAll]}><ListProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewProject, CTPRoles.RoleViewProjectOwned, CTPRoles.RoleViewProjectAll]}><ViewProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddProject]}><EditProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditProject, CTPRoles.RoleEditProjectOwned, CTPRoles.RoleEditProjectAll]}><EditProject /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteProject} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteProject, CTPRoles.RoleDeleteProjectOwned, CTPRoles.RoleDeleteProjectAll]}><EditProject /></RoleProtectedRoute>} />

          <Route path={CTPNav.PathListCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListCable, CTPRoles.RoleListCableOwned, CTPRoles.RoleListCableAll]}><ListCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewCable, CTPRoles.RoleViewCableOwned, CTPRoles.RoleViewCableAll]}><ViewCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddCable]}><EditCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditCable, CTPRoles.RoleEditCableOwned, CTPRoles.RoleEditCableAll]}><EditCable /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteCable} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteCable, CTPRoles.RoleDeleteCableOwned, CTPRoles.RoleDeleteCableAll]}><EditCable /></RoleProtectedRoute>} />

          <Route
            path={CTPNav.PathListCablePullIn}
            element={(
              <RoleProtectedRoute user={user} roles={[CTPRoles.RoleListCablePullIn, CTPRoles.RoleListCablePullInOwned, CTPRoles.RoleListCablePullInAll]}>
                <ListCablePullIn />
              </RoleProtectedRoute>
            )}
          />
          <Route
            path={CTPNav.PathViewCablePullIn}
            element={(
              <RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewCablePullIn, CTPRoles.RoleViewCablePullInOwned, CTPRoles.RoleViewCablePullInAll]}>
                <ViewCablePullIn />
              </RoleProtectedRoute>
            )}
          />
          <Route path={CTPNav.PathAddCablePullIn} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddCablePullIn]}><EditCablePullIn /></RoleProtectedRoute>} />
          <Route
            path={CTPNav.PathEditCablePullIn}
            element={(
              <RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditCablePullIn, CTPRoles.RoleEditCablePullInOwned, CTPRoles.RoleEditCablePullInAll]}>
                <EditCablePullIn />
              </RoleProtectedRoute>
            )}
          />
          <Route
            path={CTPNav.PathDeleteCablePullIn}
            element={(
              <RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteCablePullIn, CTPRoles.RoleDeleteCablePullInOwned, CTPRoles.RoleDeleteCablePullInAll]}>
                <EditCablePullIn />
              </RoleProtectedRoute>
            )}
          />

          <Route path={CTPNav.PathListUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleListUser, CTPRoles.RoleListUserOwned, CTPRoles.RoleListUserAll]}><ListUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathViewUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleViewUser, CTPRoles.RoleViewUserOwned, CTPRoles.RoleViewUserAll]}><ViewUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathAddUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleAddUser]}><EditUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathEditUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleEditUser, CTPRoles.RoleEditUserOwned, CTPRoles.RoleEditUserAll]}><EditUser /></RoleProtectedRoute>} />
          <Route path={CTPNav.PathDeleteUser} element={<RoleProtectedRoute user={user} roles={[CTPRoles.RoleDeleteUser, CTPRoles.RoleDeleteUserOwned, CTPRoles.RoleDeleteUserAll]}><EditUser /></RoleProtectedRoute>} />

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
    const isInRole = Roles.userIsInRole(user, roles);
    console.log(`RoleProtectedRoute: ${user.username} is in role ${roles} = ${isInRole}`);
    // return (isInRole) ? children : <Navigate to={CTPNav.PathNotAuthorized} />;
    return children;
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
