import { Mongo } from 'meteor/mongo';

/**
 * The ProjectsCollection. It encapsulates state and variable values for Projects.
 */
class ProjectsOwnedBysView {
  constructor() {
    // The name of this collection.
    this.name = 'ProjectsOwnedByView';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ProjectsCollection.
 * @type {ProjectsCollection}
 */
export const ProjectsOwnedBy = new ProjectsOwnedBysView();
