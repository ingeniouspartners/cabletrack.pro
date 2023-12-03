import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';
import { Companies } from '../../api/company/Companies';
import { CompaniesOwnedBy} from '../../api/company/CompaniesOwnedBys';
import { CompaniesUsedBy } from '../../api/company/CompaniesUsedBys';
import { Projects } from '../../api/project/Projects';
import { ProjectsOwnedBy } from '../../api/project/ProjectsOwnedBys';
import { ProjectsUsedBy } from '../../api/project/ProjectsUsedBys';
import { Cables } from '../../api/cable/Cables';
import { CablesOwnedBy } from '../../api/cable/CablesOwnedBys';
import { CablesUsedBy } from '../../api/cable/CablesUsedBys';
import { CablePullIns } from '../../api/cable/CablePullIns';
// import { RoleListCompanyAll, RoleListProjectAll, RoleListCableAll, RoleListCablePullInAll, RoleListUserAll } from '../../api/role/Roles';

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
    return Companies.collection.find({});
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(CompaniesOwnedBy.userPublicationName, function () {
  if (this.userId) {
    return CompaniesOwnedBy.collection.find({ ownedID: this.userId });
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(CompaniesUsedBy.userPublicationName, function () {
  if (this.userId) {
    return CompaniesUsedBy.collection.find({});
  }
  return this.ready();
});

// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Projects.userPublicationName, function () {
  if (this.userId) {
    return Projects.collection.find({});
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(ProjectsOwnedBy.userPublicationName, function () {
  if (this.userId) {
    return ProjectsOwnedBy.collection.find({ ownedID: this.userId });
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(ProjectsUsedBy.userPublicationName, function () {
  if (this.userId) {
    return ProjectsUsedBy.collection.find({ userID: this.userID });
  }
  return this.ready();
});

// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Cables.userPublicationName, function () {
  if (this.userId) {
    return Cables.collection.find({});
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(CablesOwnedBy.userPublicationName, function () {
  if (this.userId) {
    return CablesOwnedBy.collection.find({ ownedID: this.userId });
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(CablesUsedBy.userPublicationName, function () {
  if (this.userId) {
    return CablesUsedBy.collection.find({ userID: this.userID });
  }
  return this.ready();
});

// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(CablePullIns.userPublicationName, function () {
  if (this.userId) {
    return CablePullIns.collection.find({});
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Companies.adminPublicationName, function () {
  if (this.userId) { // && Roles.userIsInRole(this.userId, RoleListCompanyAll)) {
    return Companies.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Projects.adminPublicationName, function () {
  if (this.userId) { // && Roles.userIsInRole(this.userId, RoleListProjectAll)) {
    return Projects.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Cables.adminPublicationName, function () {
  if (this.userId) { // && Roles.userIsInRole(this.userId, RoleListCableAll)) {
    return Cables.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(CablePullIns.adminPublicationName, function () {
  if (this.userId) { // && Roles.userIsInRole(this.userId, RoleListCablePullInAll)) {
    return CablePullIns.collection.find();
  }
  return this.ready();
});
