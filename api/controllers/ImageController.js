/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // GET /img/v1/graphs/{id}.svg
  graph(req, res) {
    // this.findGraph(req);
    // Find graph
    // Build graph
    return res.send(`Hi there! ${uuid}`);
  },
  findGraph(req) {
    const uuid = req.param('id');
    const graph = Graph.findOne({uuid: uuid});
  },
};

