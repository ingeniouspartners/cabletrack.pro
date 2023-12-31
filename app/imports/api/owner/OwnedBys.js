import { Mongo } from 'meteor/mongo';
import { DBSchemaOwnedBy } from '../schema/DBSchemas';

/**
 * The OwnedBysCollection. It encapsulates state and variable values for projects.
 */
class OwnedBysCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OwnedBysCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.dbSchema = DBSchemaOwnedBy;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.dbSchema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the OwnerCollection.
 * @type {OwnedBysCollection}
 */
export const OwnedBys = new OwnedBysCollection();
