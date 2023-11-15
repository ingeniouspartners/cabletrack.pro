import { Mongo } from 'meteor/mongo';
import { cablePullInSchema } from '../schema/Schemas';

/**
 * The CablePullInsCollection. It encapsulates state and variable values for cable pull ins.
 */
class CablePullInsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CablePullInsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = cablePullInSchema;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CableCollection.
 * @type {CablePullInsCollection}
 */
export const CablePullIns = new CablePullInsCollection();
