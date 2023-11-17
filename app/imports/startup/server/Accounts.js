import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { CableTrackProRoles, GlobalAdminRoles, CompanyOwnerRoles, ProjectOwnerRoles, ElectricianRoles, RoleGlobalAdmin, RoleCompanyOwner, RoleProjectOwner, RoleElectrician } from '../../api/role/Roles';

/* eslint-disable no-console */
CableTrackProRoles.forEach((role) => (Roles.createRole(role, { unlessExists: true })));

Roles.addRolesToParent(GlobalAdminRoles, RoleGlobalAdmin);
Roles.addRolesToParent(CompanyOwnerRoles, RoleCompanyOwner);
Roles.addRolesToParent(ProjectOwnerRoles, RoleProjectOwner);
Roles.addRolesToParent(ElectricianRoles, RoleElectrician);

<<<<<<< Updated upstream
const createUser = (username, email, password, roles) => {
  console.log(`  Creating user ${username}.`);
  Accounts.createUser({
    username: username,
    email: email,
    password: password,
  });
  const userID = Meteor.users.findOne({ username: username })._id;
=======
const createUser = (email, password, roles) => {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
>>>>>>> Stashed changes
  Roles.addUsersToRoles(userID, roles);
};

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
<<<<<<< Updated upstream
    Meteor.settings.defaultAccounts.forEach(({ username, email, password, roles }) => createUser(username, email, password, roles));
=======
    Meteor.settings.defaultAccounts.forEach(({ email, password, roles }) => createUser(email, password, roles));
>>>>>>> Stashed changes
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
