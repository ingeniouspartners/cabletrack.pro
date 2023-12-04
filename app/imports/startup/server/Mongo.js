import { Meteor } from 'meteor/meteor';
import { CombinePath, PathViewCompany, PathViewProject, PathViewCable, PathViewCablePullIn } from '../../api/navigation/Navigation';
import { OwnedBys } from '../../api/owner/OwnedBys.js';
import { UsedBys } from '../../api/owner/UsedBys.js';
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
  console.log(`  Resolving owner: ${username}`);
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

const addUser = (usedObj, username) => {
  console.log(`  Resolving user: ${username}`);
  const user = Meteor.users.findOne({ username: username });
  if (user && usedObj) {
    const users = {
      usedID: usedObj._id,
      userID: user._id,
    };
    UsedBys.collection.insert(users);
  }
};

// Initialize the database with a default data document.
const addCompany = (company) => {
  console.log(`  Adding: ${company.name}`);
  const copy = company;
  const ownerNames = copy.ownerNames;
  copy.ownerNames = undefined;
  const userNames = copy.userNames;
  copy.userNames = undefined;
  const newCompany = Companies.collection.findOne(Companies.collection.insert(copy));
  console.log(CombinePath(PathViewCompany, { companyID: newCompany._id }));
  ownerNames.forEach(ownerName => addOwner(newCompany, ownerName));
  userNames.forEach(userName => addUser(newCompany, userName));
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
  const userNames = copy.userNames;
  copy.userNames = undefined;
  copy.companyID = resolveNamedObjectId(Companies.collection, copy.company);
  copy.company = undefined;
  const newProject = Projects.collection.findOne(Projects.collection.insert(copy));
  console.log(CombinePath(PathViewProject, { companyID: newProject.companyID, projectID: newProject._id }));
  ownerNames.forEach(ownerName => addOwner(newProject, ownerName));
  userNames.forEach(userName => addUser(newProject, userName));
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
  const userNames = copy.userNames;
  copy.userNames = undefined;
  copy.companyID = resolveNamedObjectId(Companies.collection, copy.company);
  copy.company = undefined;
  copy.projectID = resolveNamedObjectId(Projects.collection, copy.project);
  copy.project = undefined;
  const cableID = Cables.collection.insert(copy);
  const newCable = Cables.collection.findOne(cableID);
  console.log(CombinePath(PathViewCable, { companyID: newCable.companyID, projectID: newCable.projectID, cableID: newCable._id }));
  ownerNames.forEach(ownerName => addOwner(newCable, ownerName));
  userNames.forEach(userName => addUser(newCable, userName));
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

// Then grab the raw db handler
// @link http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html
const db = Companies.collection.rawDatabase();

// Unfortunately, this driver doesn't support the `db.createView` method
// So let's use `db.createCollection` instead
// @link https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection
db.createCollection('CompaniesOwnedByView', {
  viewOn: 'CompaniesCollection',
  pipeline: [
    {
      $lookup:
        {
          from: 'OwnedBysCollection',
          localField: '_id',
          foreignField: 'ownedID',
          as: 'OwnedBy',
        },
    },
    {
      $project:
        {
          _id: 1,
          name: 1,
          ownerID: '$OwnedBy.ownerID',
        },
    },
    { $unwind: '$ownerID' },
  ] }, (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(result);
  }
});

db.createCollection('ProjectsOwnedByView', {
  viewOn: 'ProjectsCollection',
  pipeline: [
    {
      $lookup:
        {
          from: 'OwnedBysCollection',
          localField: '_id',
          foreignField: 'ownedID',
          as: 'OwnedBy',
        },
    },
    {
      $project:
        {
          _id: 1,
          name: 1,
          ownerID: '$OwnedBy.ownerID',
        },
    },
    { $unwind: '$ownerID' },
  ] }, (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(result);
  }
});

db.createCollection('CablesOwnedByView', {
  viewOn: 'CablesCollection',
  pipeline: [
    {
      $lookup:
        {
          from: 'OwnedBysCollection',
          localField: '_id',
          foreignField: 'ownedID',
          as: 'OwnedBy',
        },
    },
    {
      $project:
        {
          _id: 1,
          name: 1,
          ownerID: '$OwnedBy.ownerID',
        },
    },
    { $unwind: '$ownerID' },
  ] }, (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(result);
  }
});

db.createCollection('CompaniesUsedByView', {
  viewOn: 'CompaniesCollection',
  pipeline: [
    {
      $lookup:
        {
          from: 'UsedBysCollection',
          localField: '_id',
          foreignField: 'usedID',
          as: 'UsedBy',
        },
    },
    {
      $project:
        {
          _id: 1,
          name: 1,
          userID: '$UsedBy.userID',
        },
    },
    { $unwind: '$userID' },
  ] }, (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(result);
  }
});

db.createCollection('ProjectsUsedByView', {
  viewOn: 'ProjectsCollection',
  pipeline: [
    {
      $lookup:
        {
          from: 'UsedBysCollection',
          localField: '_id',
          foreignField: 'usedID',
          as: 'UsedBy',
        },
    },
    {
      $project:
        {
          _id: 1,
          name: 1,
          userID: '$UsedBy.userID',
        },
    },
    { $unwind: '$userID' },
  ] }, (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(result);
  }
});

db.createCollection('CablesUsedByView', {
  viewOn: 'CablesCollection',
  pipeline: [
    {
      $lookup:
        {
          from: 'UsedBysCollection',
          localField: '_id',
          foreignField: 'usedID',
          as: 'UsedBy',
        },
    },
    {
      $project:
        {
          _id: 1,
          name: 1,
          userID: '$UsedBy.userID',
        },
    },
    { $unwind: '$userID' },
  ] }, (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(result);
  }
});
