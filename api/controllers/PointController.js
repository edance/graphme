/**
 * PointController
 *
 * @description :: Server-side logic for managing points
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    return res.notFound();
  },
  show: function (req, res) {
    return res.notFound();
  },
  update: function (req, res) {
    return res.notFound();
  },
  destroy: function (req, res) {
    return res.notFound();
  },

  create: function(req, res) {
    this.getGraphUUIDFromToken(req)
      .then(this.getGraphByUUID)
      .then((graph) => this.createPoint(req, graph.id))
      .then((point) => res.status(201).json({point: point}))
      .catch((error) => res.status(400).json(error.Errors));
  },

  getGraphUUIDFromToken(req) {
    const token = req.param('token');
    return JwtService.verify(token);
  },

  getGraphByUUID(opts) {
    return Graph.findOne({uuid: opts.uuid});
  },

  createPoint(req, graphId) {
    const params = this.filteredParams(req);
    params.graph = graphId;
    return Point.create(params);
  },

  filteredParams(req) {
    const obj = req.allParams();
    delete obj.token;
    return obj;
  }
};
