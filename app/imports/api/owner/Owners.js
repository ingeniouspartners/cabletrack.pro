import { Mongo } from 'meteor/mongo';
import { SchemaOwner } from '../schema/Schemas';

/**
 * The OwnersCollection. It encapsulates state and variable values for projects.
 */
class OwnersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OwnersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = SchemaOwner;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the OwnerCollection.
 * @type {OwnersCollection}
 */
export const Owners = new OwnersCollection();
