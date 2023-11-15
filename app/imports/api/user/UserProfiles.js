import { Mongo } from 'meteor/mongo';
import { userProfileSchema } from '../schema/Schemas';

/**
 * The UserProfilesCollection. It encapsulates state and variable values for user profiles.
 */
class UserProfilesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UserProfilesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = userProfileSchema;
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UserProfileCollection.
 * @type {UserProfilesCollection}
 */
export const UserProfiles = new UserProfilesCollection();
