// For file I/O
var Dict = require("dict");
var fs = require("fs");
var math = require("math"); 
// Define Vertex Class
class vertex {
  // Constructor Function
  constructor(name) {
    this.prev = 0;
    this.dist = 0;
    this.x = 0;
    this.y = 0;
    this.done = false;
    this.name = name;
    this.neighbors = {};
  }
}
// Define Graph Class
class Graph {
  // Graph Constructor
  constructor() {
    // Dictionary for graph vertices
    this.places = {};
  }
  // Insert function
  insert(vertexName, x, y) {
    if (this.places[vertexName] == null) {
      // change x and y coordinates to integer
      var x_coordinate = parseInt(x, 10);
      var y_coordinate = parseInt(y, 10);
      // create new vertex
      var newVertex = new vertex(vertexName);
      newVertex.x = x_coordinate;
      newVertex.y = y_coordinate;
      this.places[vertexName] = newVertex;
    } else {
      // vertex already exists in graph
      console.log("Already in the Graph!");
    }
  }

  // Function for creating edges between nodes
  insertEdge(vertex1, vertex2) {
    // check if both vertices are in the graph
    if (this.places[vertex1] == null || this.places[vertex2] == null) {
      console.log("Cannot find both vertices!");
      return;
    }
    var startNode = this.places[vertex1];
    var endNode = this.places[vertex2];
    // calculate euclidean distance and add weight to edge
    var weight =
      math.pow(startNode.x - endNode.x, 2) +
      math.pow(startNode.y - endNode.y, 2);
    // add weight and edge to adjacency lists
    startNode.neighbors[endNode] = weight;
    endNode.neighbors[startNode] = weight;
  }

  // Build function
  build(inFileVertex, inFilePairs) {
    // file paths
    var file_path_vertex = inFileVertex;
    var file_path_pairs = inFilePairs;
    // Add cities to graph
    var data_coordinates = fs.readFileSync(file_path_vertex);
    data_coordinates = data_coordinates.toString();
    data_coordinates = data_coordinates.split(/ |\n/);
    for (var i = 0; i < data_coordinates.length - 3; i += 3) {
      // add coordinates into graph
      this.insert(
        data_coordinates[i],
        data_coordinates[i + 1],
        data_coordinates[i + 2]
      );
    }
    var data_pairs = fs.readFileSync(file_path_pairs);
    data_pairs = data_pairs.toString();
    data_pairs = data_pairs.split(/ |\n/);
    for (var i = 0; i < data_pairs.length - 2; i += 2) {
      // add edges into graph
      this.insertEdge(data_pairs[i], data_pairs[i + 1]);
    }
  }

  // Dijkstra's Algorithm
  shortestWeighted(startPos, endDest){
    return " "; 
  }
}

module.exports = vertex; 

// TESTS
var testGraph = new Graph();
var file_path1 = "../Data/cityxy.txt";
var file_path2 = "../Data/citypairs.txt";
testGraph.build(file_path1, file_path2);