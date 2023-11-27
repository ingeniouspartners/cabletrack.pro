import { Meteor } from 'meteor/meteor';
import { CombinePath, PathViewCompany, PathViewProject, PathViewCable, PathViewCablePullIn } from '../../api/navigation/Navigation';
import { OwnedBys } from '../../api/owner/OwnedBys.js';
import { Companies } from '../../api/company/Companies.js';
import { Projects } from '../../api/project/Projects.js';
import { Cables } from '../../api/cable/Cables.js';
import { CablePullIns } from '../../api/cable/CablePullIns';

/* eslint-disable no-console */

const resolveUser = (username) => {
  const user = Meteor.users.findOne({ username: username });
  return (user ? user._id : undefined);
};

const addOwner = (ownedObj, username) => {
  // console.log(`  Resolving owner: ${username}`);
  const owner = Meteor.users.findOne({ username: username });
  if (owner && ownedObj) {
    const owners = {
      ownedID: ownedObj._id,
      ownerID: owner._id,
    };
    OwnedBys.collection.insert(owners);
  }
};

const resolveNamedObjectId = (collection, name) => {
  // console.log(`  Resolving Named Object: ${name}`);
  const object = collection.findOne({ name: name });
  return (object ? object._id : undefined);
};

// Initialize the database with a default data document.
const addCompany = (company) => {
  console.log(`  Adding: ${company.name}`);
  const copy = company;
  const ownerNames = copy.ownerNames;
  copy.ownerNames = undefined;
  const newCompany = Companies.collection.findOne(Companies.collection.insert(copy));
  console.log(CombinePath(PathViewCompany, { companyID: newCompany._id }));
  ownerNames.forEach(ownerName => addOwner(newCompany, ownerName));
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
  const ownerNames = copy.ownerNames;
  copy.ownerNames = undefined;
  copy.companyID = resolveNamedObjectId(Companies.collection, copy.company);
  copy.company = undefined;
  const newProject = Projects.collection.findOne(Projects.collection.insert(copy));
  console.log(CombinePath(PathViewProject, { companyID: newProject.companyID, projectID: newProject._id }));
  ownerNames.forEach(ownerName => addOwner(newProject, ownerName));
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
  const ownerNames = copy.ownerNames;
  copy.ownerNames = undefined;
  copy.companyID = resolveNamedObjectId(Companies.collection, copy.company);
  copy.company = undefined;
  copy.projectID = resolveNamedObjectId(Projects.collection, copy.project);
  copy.project = undefined;
  const cableID = Cables.collection.insert(copy);
  const newCable = Cables.collection.findOne(cableID);
  console.log(CombinePath(PathViewCable, { companyID: newCable.companyID, projectID: newCable.projectID, cableID: newCable._id }));
  ownerNames.forEach(ownerName => addOwner(newCable, ownerName));
};

// Initialize the CablesCollection if empty.
if (Cables.collection.find().count() === 0) {
  if (Meteor.settings.defaultCables) {
    console.log('Creating default cables.');
    Meteor.settings.defaultCables.forEach(cable => addCable(cable));
  }
}

const addCablePullIn = (cablePullIn) => {
  console.log(`  Adding: ${cablePullIn.installerName}`);
  const copy = cablePullIn;
  copy.companyID = resolveNamedObjectId(Companies.collection, copy.company);
  copy.company = undefined;
  copy.projectID = resolveNamedObjectId(Projects.collection, copy.project);
  copy.project = undefined;
  copy.cableID = resolveNamedObjectId(Cables.collection, copy.cable);
  copy.cable = undefined;
  copy.personInstalled = resolveUser(copy.installerName);
  copy.installerName = undefined;
  const pullinID = CablePullIns.collection.insert(copy);
  const newCablePullIn = CablePullIns.collection.findOne(pullinID);
  console.log(CombinePath(PathViewCablePullIn, { companyID: newCablePullIn.companyID, projectID: newCablePullIn.projectID, cableID: newCablePullIn.cableID, pullinID: newCablePullIn._id }));
};

if (CablePullIns.collection.find().count() === 0) {
  if (Meteor.settings.defaultCablePullIns) {
    console.log('Creating default cable pullins.');
    Meteor.settings.defaultCablePullIns.forEach(cablePullIn => addCablePullIn(cablePullIn));
  }
}
