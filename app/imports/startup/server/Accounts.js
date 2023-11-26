import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { CableTrackProRoles, GlobalAdminRoles, CompanyOwnerRoles, ProjectOwnerRoles, ElectricianRoles, RoleGlobalAdmin, RoleCompanyOwner, RoleProjectOwner, RoleElectrician } from '../../api/role/Roles';
import { SchemaUserProfile } from '../../api/schema/Schemas';

// Support for playing D&D: Roll 3d6 for dexterity.
Accounts.onCreateUser((options, user) => {
  const customizedUser = user;
  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    customizedUser.profile = options.profile;
  }
  if (options.firstName) {
    customizedUser.firstName = options.firstName;
  }
  if (options.lastName) {
    customizedUser.lastName = options.lastName;
  }
  if (options.address) {
    customizedUser.address = options.address;
  }
  if (options.phone) {
    customizedUser.phone = options.phone;
  }
  if (options.fax) {
    customizedUser.fax = options.fax;
  }
  if (options.picture) {
    customizedUser.picture = options.picture;
  }
  // Don't forget to return the new user object at the end!
  return customizedUser;
});

// Ensuring every user has an email address, should be in server-side code
Accounts.validateNewUser((user) => {
  SchemaUserProfile.validate(user);

  // Return true to allow user creation to proceed
  return true;
});

/* eslint-disable no-console */
CableTrackProRoles.forEach((role) => (Roles.createRole(role, { unlessExists: true })));

Roles.addRolesToParent(GlobalAdminRoles, RoleGlobalAdmin);
Roles.addRolesToParent(CompanyOwnerRoles, RoleCompanyOwner);
Roles.addRolesToParent(ProjectOwnerRoles, RoleProjectOwner);
Roles.addRolesToParent(ElectricianRoles, RoleElectrician);

const createUser = (username, email, password, roles) => {
  console.log(`  Creating user ${username}.`);
  Accounts.createUser({
    username: username,
    email: email,
    password: password,
  });
  const userID = Meteor.users.findOne({ username: username })._id;
  console.log(`${username}: ${userID}`);
  Roles.addUsersToRoles(userID, roles);
};

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ username, email, password, roles }) => createUser(username, email, password, roles));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
