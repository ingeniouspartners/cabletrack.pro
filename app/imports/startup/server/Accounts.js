import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { CableTrackProRoles, GlobalAdminRoles, CompanyOwnerRoles, ProjectOwnerRoles, ElectricianRoles, RoleGlobalAdmin, RoleCompanyOwner, RoleProjectOwner, RoleElectrician } from '../../api/role/Roles';

/* eslint-disable no-console */
CableTrackProRoles.forEach((role) => (Roles.createRole(role, { unlessExists: true })));

Roles.addRolesToParent(RoleGlobalAdmin, GlobalAdminRoles);
Roles.addRolesToParent(RoleCompanyOwner, CompanyOwnerRoles);
Roles.addRolesToParent(RoleProjectOwner, ProjectOwnerRoles);
Roles.addRolesToParent(RoleElectrician, ElectricianRoles);

const createUser = (email, password, role) => {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  Roles.addUsersToRoles(userID, role);
};

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
