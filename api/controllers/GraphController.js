/**
 * GraphController
 *
 * @description :: Server-side logic for managing graphs
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
  create(req, res) {
    const params = req.allParams();
    Graph.create(params).then((graph) => {
      var responseData = {
        graph,
        token: JwtService.issue({uuid: graph.uuid})
      };
      return res.status(201).json(responseData);
    }).catch((error) => res.status(400).json(error.Errors));
  },
};
