import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Projects } from '../../api/project/Projects';
import { Cables } from '../../api/cable/Cables';
// import { Roles } from 'meteor/alanning:roles';
Meteor.publish(Projects.userPublicationName, function () {
  if (this.userId) {
    return Projects.collection.find({ owners: this.userId });
  }
  return this.ready();
});

Meteor.publish(Projects.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Projects.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Cables.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Cables.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Cables.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Cables.collection.find();
  }
  return this.ready();
});
