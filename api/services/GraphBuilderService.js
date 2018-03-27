const D3Node = require('d3-node');

module.exports = {
  // public interface
  buildSVG(graph) {
    const d3n = new D3Node();      // initializes D3 with container element
    d3n.createSVG(10,20).append('g'); // create SVG w/ 'g' tag and width/height
    return d3n.svgString(); // output: <svg width=10 height=20 xmlns="http://www.w3.org/2000/svg"><g></g></svg>
  }

  // private
  // not sure how to do that in js
}
