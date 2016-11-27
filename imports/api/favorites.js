import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Favorites = new Mongo.Collection('favorites');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('favorites', function tasksPublication() {
    return Favorites.find({
      owner: this.userId
    });
  });
}

Meteor.methods({
  'favorites.insert'(picture) {
    check(picture, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Favorites.insert({
      picture,
      owner: this.userId,
    });
  },
  'favorites.remove'(favoriteId) {
    check(favoriteId, String);

    Favorites.remove(favoriteId);
  }
});
