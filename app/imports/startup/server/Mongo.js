import { Meteor } from 'meteor/meteor';
import { Companies } from '../../api/company/Companies.js';
import { Projects } from '../../api/project/Projects.js';
import { Cables } from '../../api/cable/Cables.js';

/* eslint-disable no-console */

const resolveOwner = (ownedObject, user) => {
  console.log(`  Resolving owner: ${user}`);
  const owner = Meteor.users.findOne({ username: user });
  ownedObject.owners.push(owner._id);
};

const resolveObjectId = (collection, name) => {
  console.log(`  Resolving object id: ${name}`);
  const object = collection.findOne({ name: name });
  return object._id;
};

// Initialize the database with a default data document.
const addCompany = (company) => {
  console.log(`  Adding: ${company.name}`);
  const copy = company;
  copy.users.forEach(user => resolveOwner(copy, user));
  copy.users = undefined;
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
  copy.users.forEach(user => resolveOwner(copy, user));
  copy.users = undefined;
  copy.companyID = resolveObjectId(Companies.collection, copy.company);
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
  copy.users.forEach(user => resolveOwner(copy, user));
  copy.users = undefined;
  copy.companyID = resolveObjectId(Companies.collection, copy.company);
  copy.projectID = resolveObjectId(Projects.collection, copy.project);
  Cables.collection.insert(copy);
};

// Initialize the CablesCollection if empty.
if (Cables.collection.find().count() === 0) {
  if (Meteor.settings.defaultCables) {
    console.log('Creating default cables.');
    Meteor.settings.defaultCables.forEach(cable => addCable(cable));
  }
}
