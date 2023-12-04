import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Roles } from 'meteor/alanning:roles';
import { CableTrackProRoles, GlobalAdminRoles, CompanyOwnerRoles, ProjectOwnerRoles, ElectricianRoles, RoleGlobalAdmin, RoleCompanyOwner, RoleProjectOwner, RoleElectrician } from '../../api/role/Roles';

AccountsTemplates.addField({
  _id: 'firstName',
  type: 'text',
  displayName: 'First Name',
  required: true,
  minLength: 2,
  maxLength: 50,
  errStr: 'Please enter your first name',
});

AccountsTemplates.addField({
  _id: 'lastName',
  type: 'text',
  displayName: 'Last Name',
  required: true,
  minLength: 2,
  maxLength: 50,
  errStr: 'Please enter your last name',
});

AccountsTemplates.addField({
  _id: 'address',
  type: 'text',
  displayName: 'Address',
  required: true,
  minLength: 2,
  maxLength: 100,
  errStr: 'Please enter your address',
});

AccountsTemplates.addField({
  _id: 'phone',
  type: 'tel',
  displayName: 'Phone',
  required: true,
  minLength: 10,
  maxLength: 12,
  errStr: 'Please enter your phone number',
});

AccountsTemplates.addField({
  _id: 'fax',
  type: 'tel',
  displayName: 'Fax',
  required: false,
  minLength: 10,
  maxLength: 12,
  errStr: 'Please enter your fax number',
});

AccountsTemplates.addField({
  _id: 'picture',
  type: 'url',
  displayName: 'Picture',
  required: false,
  minLength: 10,
  maxLength: 256,
  errStr: 'Please enter a valid URL',
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
  const user = Meteor.users.findOne({ username: username });
  console.log(`${user.username}: ${user}`);
  Roles.addUsersToRoles(user._id, roles);
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
