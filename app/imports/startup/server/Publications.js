import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Companies } from '../../api/company/Companies';
import { Projects } from '../../api/project/Projects';
import { Cables } from '../../api/cable/Cables';
import { CablePullIns } from '../../api/cable/CablePullIns';
import { RoleListCompanyAll, RoleListProjectAll, RoleListCableAll, RoleListCablePullInAll, RoleListUserAll } from '../../api/role/Roles';
import { UserProfiles } from '../../api/user/UserProfiles';

// alanning:Roles.js publication
// Recommended code to publish Roles.js for each user.
Meteor.publish(null, function () {
  if (Meteor.userId()) {
    return Meteor.roleAssignment.find({ 'user._id': Meteor.userId() });
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Companies.userPublicationName, function () {
  if (this.userId) {
    return Companies.collection.find({ owners: this.userId });
  }
  return this.ready();
});

// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Projects.userPublicationName, function () {
  if (this.userId) {
    return Projects.collection.find({ owners: this.userId });
  }
  return this.ready();
});

// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Cables.userPublicationName, function () {
  if (this.userId) {
    return Cables.collection.find({ owners: this.userId });
  }
  return this.ready();
});

// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(CablePullIns.userPublicationName, function () {
  if (this.userId) {
    return CablePullIns.collection.find({ owners: this.userId });
  }
  return this.ready();
});

// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(UserProfiles.userPublicationName, function () {
  if (this.userId) {
    return UserProfiles.collection.find({ userID: this.userId });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Companies.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, RoleListCompanyAll)) {
    return Companies.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Projects.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, RoleListProjectAll)) {
    return Projects.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Cables.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, RoleListCableAll)) {
    return Cables.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(CablePullIns.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, RoleListCablePullInAll)) {
    return CablePullIns.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(UserProfiles.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, RoleListUserAll)) {
    return UserProfiles.collection.find();
  }
  return this.ready();
});
