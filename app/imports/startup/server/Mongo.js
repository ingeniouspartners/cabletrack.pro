import { Meteor } from 'meteor/meteor';
import { Companies } from '../../api/company/Companies.js';
import { Projects } from '../../api/project/Projects.js';
import { Cables } from '../../api/cable/Cables.js';

/* eslint-disable no-console */

const resolveOwner = (ownedObject, username) => {
  console.log(`  Resolving owner: ${username}`);
  const ownerID = Meteor.users.findOne({ username: username })._id;
  ownedObject.owners.push(ownerID);
};

const resolveNamedObjectId = (collection, name) => {
  console.log(`  Resolving Named Object: ${name}`);
  const objectID = collection.findOne({ name: name })._id;
  return objectID;
};

// Initialize the database with a default data document.
const addCompany = (company) => {
  console.log(`  Adding: ${company.name}`);
  const copy = company;
  copy.ownerNames.forEach(ownerName => resolveOwner(copy, ownerName));
  copy.ownerNames = undefined;
  Companies.collection.insert(copy);
};

// Initialize the CablesCollection if empty.
if (Companies.collection.find().count() === 0) {
  if (Meteor.settings.defaultCompanies) {
    console.log('Creating default companies.');
    Meteor.settings.defaultCompanies.forEach(company => addCompany(company));
  }
}

// Initialize the database with a default data document.
const addProject = (project) => {
  console.log(`  Adding: ${project.name}`);
  const copy = project;
  copy.ownerNames.forEach(ownerName => resolveOwner(copy, ownerName));
  copy.ownerNames = undefined;
  copy.companyID = resolveNamedObjectId(Companies.collection, copy.company);
  copy.company = undefined;
  Projects.collection.insert(copy);
};

// Initialize the CablesCollection if empty.
if (Projects.collection.find().count() === 0) {
  if (Meteor.settings.defaultProjects) {
    console.log('Creating default projects.');
    Meteor.settings.defaultProjects.forEach(project => addProject(project));
  }
}

// Initialize the database with a default data document.
const addCable = (cable) => {
  console.log(`  Adding: ${cable.name}`);
  const copy = cable;
  copy.ownerNames.forEach(user => resolveOwner(copy, user));
  copy.ownerNames = undefined;
  copy.companyID = resolveNamedObjectId(Companies.collection, copy.company);
  copy.company = undefined;
  copy.projectID = resolveNamedObjectId(Projects.collection, copy.project);
  copy.project = undefined;
  Cables.collection.insert(copy);
};

// Initialize the CablesCollection if empty.
if (Cables.collection.find().count() === 0) {
  if (Meteor.settings.defaultCables) {
    console.log('Creating default cables.');
    Meteor.settings.defaultCables.forEach(cable => addCable(cable));
  }
}
