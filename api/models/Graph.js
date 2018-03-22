/**
 * Graph.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    uuid: {
      type: 'string',
      unique: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    encryptedToken: {
      type: 'string',
      required: true
    },

    // Add reference to points
    points: {
      collection: 'point',
      via: 'graph'
    }
  }
};
