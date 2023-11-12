import { Meteor } from 'meteor/meteor';
import { Projects } from '../../api/Projects.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.

const addProject = (project) => {
  console.log(`  Adding: ${project.name} (${project.owner})`);
  Projects.collection.insert(project);
};

if (Projects.collection.find().count() === 0) {
  if (Meteor.settings.defaultProjects) {
    console.log('Creating default projects.');
    Meteor.settings.defaultProjects.forEach(project => addProject(project));
  }
}
