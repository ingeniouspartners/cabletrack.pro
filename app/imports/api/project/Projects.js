import { Mongo } from 'meteor/mongo';
import { SchemaProject } from '../schema/Schemas';

/**
 * The ProjectsCollection. It encapsulates state and variable values for projects.
 */
class ProjectsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProjectsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = SchemaProject;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ProjectCollection.
 * @type {ProjectsCollection}
 */
export const Projects = new ProjectsCollection();
