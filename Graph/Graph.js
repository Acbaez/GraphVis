// For file I/O
//const fs = require('fs');
//const readline = require('readline');
const lineReader = require('line-reader');

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
    // Hashmap for graph vertices
    this.places = {};
  }
  // Insert function
  insert(vertex, x, y) {
    if (this.vertices[vertex] == null) {
            // change x and y coordinates to integer
            x_coordinate = parseInt(x, 10); 
            y_coordinate = parseInt(y, 10); 
            // create new vertex
            newVertex = new vertex(vertex); 
            newVertex.x = x_coordinate; 
            newVertex.y = y_coordinate; 
            this.vertices[vertex] = newVertex; 
    }
    else { 
        // vertex already exists in graph
        console.log("Already in the Graph!"); 
    }
  }
  
  // Function for creating edges between nodes
  insertEdge(vertex1, vertex2){
    // check if both vertices are in the graph
    startNode = this.vertices[vertex1]; 
    endNode = this.vertices[vertex2]; 
    if(startNode == null || endNode == null){
        console.log("Cannot find both vertices!"); 
        return; 
    }
    // calculate euclidean distance and add weight to edge
    var weight = (math.pow((startNode.x - endNode.x),2) + 
        math.pow((startNode.y - endNode.y),2)); 
    // add weight and edge to adjacency lists
    startNode.neighbors[endNode.name] = weight;
    endNode.neighbors[startNode.name] = weight; 
  }

  // Build function 
  build(inFileVertex, inFilePairs) {
    // file paths
    file_path_vertex = inFileVertex; 
    file_path_pairs = inFilePairs; 
    // Read each line and add cities into graph
    lineReader.open(file_path_vertex, function(reader) {
        // read input file line by line
        if (reader.hasNextLine()) {
            reader.nextLine(function(line) {
                // separate by tab
                var tabs = item.split('\t');
                // insert vertex into graph
                insert(tabs[0], tabs[1], tabs[2]); 
            });
        }
    });
    // insert edges into graph
    lineReader.open(file_path_pairs, function(reader) {
        // read input file line by line
        if (reader.hasNextLine()) {
            reader.nextLine(function(line) {
                // separate by tab
                var tabs = item.split('\t');
                // insert vertex into graph
                insertEdge(tabs[0], tabs[1]); 
            });
        }
    });
  }
}
