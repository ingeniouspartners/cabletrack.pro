import { Meteor } from 'meteor/meteor';
import { Cables } from '../../api/cable/Cables.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
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
