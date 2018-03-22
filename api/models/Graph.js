/**
 * Graph.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const uuid = require('uuid/v1');

module.exports = {
  attributes: {
    uuid: {
      type: 'string',
      unique: true,
      required: true,
      defaultsTo: function() {
        return uuid();
      }
    },
    name: {
      type: 'string',
      required: true
    },

    // Add reference to points
    points: {
      collection: 'point',
      via: 'graph'
    }
  },

  toJSON: function() {
    var obj = this.toObject();
    delete obj.id;
    return obj;
  }
};
