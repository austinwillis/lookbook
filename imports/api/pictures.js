import { Mongo } from 'meteor/mongo';

export const Pictures = new Mongo.Collection('pictures');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('pictures', function tasksPublication() {
    return Pictures.find();
  });
}
