import { Mongo } from 'meteor/mongo';

/**
 * The CablesCollection. It encapsulates state and variable values for Cables.
 */
class CablesUsedBysView {
  constructor() {
    // The name of this collection.
    this.name = 'CablesUsedByView';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CablesCollection.
 * @type {CablesCollection}
 */
export const CablesUsedBy = new CablesUsedBysView();
