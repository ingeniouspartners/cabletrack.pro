import { Mongo } from 'meteor/mongo';
import { DBSchemaCable } from '../schema/DBSchemas';
import { FormSchemaCable } from '../schema/FormSchemas';
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
    this.formSchema = FormSchemaCable;
    this.dbSchema = DBSchemaCable;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.dbSchema);
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
