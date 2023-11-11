import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Cables } from '../../api/cable/Cables.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

const addCables = (cables) => {
  console.log(`  Adding: ${cables.description} (${cables.owner})`);
  Cables.collection.insert(cables);
};

// Initialize the CablesCollection if empty.
if (Cables.collection.find().count() === 0) {
  if (Meteor.settings.defaultCables) {
    console.log('Creating default cables.');
    Meteor.settings.defaultCables.forEach(cables => addCables(cables));
  }
}
