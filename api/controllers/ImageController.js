/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // GET /img/v1/graphs/{id}.svg
  graph(req, res) {
    return this.findGraph(req)
      .then(GraphBuilderService.buildSVG)
      .then(svg => res.send(svg))
      .catch(error => res.status(400).send('bad request'));
  },
  findGraph(req) {
    const uuid = req.param('id');
    return Graph.findOne({uuid: uuid});
  },
};

