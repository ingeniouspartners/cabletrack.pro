import { Mongo } from 'meteor/mongo';

/**
 * The CompaniesCollection. It encapsulates state and variable values for Companies.
 */
class CompaniesOwnedBysView {
  constructor() {
    // The name of this collection.
    this.name = 'CompaniesOwnedByView';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CompaniesCollection.
 * @type {CompaniesCollection}
 */
export const CompaniesOwnedBy = new CompaniesOwnedBysView();
