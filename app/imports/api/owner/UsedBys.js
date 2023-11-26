import { Mongo } from 'meteor/mongo';
import { DBSchemaUsedBy } from '../schema/DBSchemas';

/**
 * The OwnersCollection. It encapsulates state and variable values for projects.
 */
class UsedBysCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UsedBysCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.dbSchema = DBSchemaUsedBy;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.dbSchema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UsedBysCollection.
 * @type {UsedBysCollection}
 */
export const UsedBys = new UsedBysCollection();
