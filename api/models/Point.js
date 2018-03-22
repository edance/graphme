/**
 * Point.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    x: {
      type: 'float',
      required: true,
      defaultsTo: function() {
        return new Date().getTime();
      }
    },
    y: {
      type: 'float',
      required: true
    },

    // Add reference to graph
    graph: {
      model: 'graph',
      required: true
    }
  },

  toJSON: function() {
    var obj = this.toObject();
    delete obj.id;
    return obj;
  }
};
