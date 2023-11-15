import { Mongo } from 'meteor/mongo';
import { cableSchema } from '../schema/Schemas';

/**
 * The CablesCollection. It encapsulates state and variable values for cables.
 */
class CablesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CablesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = cableSchema;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CableCollection.
 * @type {CablesCollection}
 */
export const Cables = new CablesCollection();
