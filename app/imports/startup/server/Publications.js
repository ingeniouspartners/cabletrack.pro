import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Projects } from '../../api/Project/Projects';

// import { Roles } from 'meteor/alanning:roles';
Meteor.publish(Projects.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Projects.collection.find({ owner: username });
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
