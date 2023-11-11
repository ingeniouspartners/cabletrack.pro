import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} /><!-- Must be logged in to view home page, branded to user company -->
          <Route path="/company/:company_id" element={<ProtectedRoute><ViewCompany /></ProtectedRoute>} /><!-- Must be logged in to view company -->
          <Route path="/company/edit/:company_id" element={<ProtectedRoute><EditCompany /></ProtectedRoute>} /><!-- Must be logged in and admin or company owner to edit company. Not On Menu, accessed from View -->
          <Route path="/projects/" element={<ProtectedRoute><ListProject /></ProtectedRoute>} /><!-- Must be logged in to view projects -->
          <Route path="/project/:project_id" element={<ProtectedRoute><ViewProject /></ProtectedRoute>} /><!-- Must be logged in to view project -->
          <Route path="/project/add" element={<ProtectedRoute><EditProject /></ProtectedRoute>} /><!-- Must be logged in to add project. Not on Menu, accessed from List -->
          <Route path="/project/edit/:project_id" element={<ProtectedRoute><EditProject /></ProtectedRoute>} /><!-- Must be logged in to edit project. Not on Menu, accessed from List or View -->
          <Route path="/cables/:project_id" element={<ProtectedRoute><ListCable /></ProtectedRoute>} /><!-- Must be logged in to view cables, Not on Menu, accessed from Projects List or Project View -->
          <Route path="/cable/:cable_id" element={<ProtectedRoute><ViewCable /></ProtectedRoute>} /><!-- Must be logged in to view cable, Not on Menu, accessed from List -->
          <Route path="/cable/add" element={<ProtectedRoute><EditCable /></ProtectedRoute>} /><!-- Must be logged in to add cable. Not on Menu, accessed from List -->
          <Route path="/cable/edit/:cable_id" element={<ProtectedRoute><EditCable /></ProtectedRoute>} /><!-- Must be logged in to edit cable. Not on Menu, accessed from List or View -->
          <Route path="/cable/:cable_id/pullins" element={<ProtectedRoute><ListCablePullIn /></ProtectedRoute>} /><!-- Must be logged in to pull-in cable. Not on Menu, accessed from Cables List or Cable View -->
          <Route path="/cable/:cable_id/pullin/add" element={<ProtectedRoute><EditCablePullIn /></ProtectedRoute>} /><!-- Must be logged in to add pull-in. Not on Menu, accessed from Cables List -->
          <Route path="/cable/:cable_id/pullin/edit/:pullin_id" element={<ProtectedRoute><EditCablePullIn /></ProtectedRoute>} /><!-- Must be logged in to edit pull-in page. Not on Menu, accessed from Cables List or Cable View -->
          <Route path="/companies" element={<AdminProtectedRoute ready={ready}><ListCompany /></AdminProtectedRoute>} /><!-- Must be logged in and admin to view companies page -->
          <Route path="/company/add" element={<AdminProtectedRoute ready={ready}><EditCompany /></AdminProtectedRoute>} /><!-- Must be logged in and admin to add company page. Not on Menu, accessed from List -->
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
