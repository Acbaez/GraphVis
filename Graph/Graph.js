// For file I/O
var lineReader = require('line-reader');
var Dict = require("dict");
const fs = require('fs')
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
    this.neighbors = new Dict({});
  }
}
// Define Graph Class
class Graph {
  // Graph Constructor
  constructor() {
    // Hashmap for graph vertices
    this.places = new Dict({});
  }
  // Insert function
  insert(vertexName, x, y) {
    if (this.places.has(vertexName) == false) {
            // change x and y coordinates to integer
            var x_coordinate = parseInt(x, 10); 
            var y_coordinate = parseInt(y, 10); 
            // create new vertex
            var newVertex = new vertex(vertexName); 
            newVertex.x = x_coordinate; 
            newVertex.y = y_coordinate; 
            this.places[vertexName] = newVertex; 
            //this.places.add(newVertex, vertexName); 
    }
    else { 
        // vertex already exists in graph
        console.log("Already in the Graph!"); 
    }
  }
  
  // Function for creating edges between nodes
  insertEdge(vertex1, vertex2){
    // check if both vertices are in the graph
    if(this.places.has(vertex1) == false || this.places.has(vertex2) == false){
        //console.log("Cannot find both vertices!"); 
        return; 
    }
    startNode = this.vertices[vertex1]; 
    endNode = this.vertices[vertex2]; 
    // calculate euclidean distance and add weight to edge
    var weight = (math.pow((startNode.x - endNode.x),2) + 
        math.pow((startNode.y - endNode.y),2)); 
    // add weight and edge to adjacency lists
    startNode.neighbors[endNode.name] = weight;
    endNode.neighbors[startNode.name] = weight; 
  }
}
// Build function 
function build(inFileVertex, inFilePairs, graph) {
    // file paths
    var file_path_vertex = inFileVertex; 
    var file_path_pairs = inFilePairs; 
    // Add cities to graph
    fs.readFile(file_path_vertex, (err, data) => { 
        if (err){
            console.log("done");
            throw err; 
        } 
        // separate by tab
        var data = data.toString(); 
        var data = data.replace(/\n/g, " "); 
        var tabs = data.split(' ');
        for(var i = 0; i < tabs.length-3; i+=3){
            graph.insert(tabs[i], tabs[i+1], tabs[i+2]); 
        }
    })
    console.log(graph.places)
    // Add edges to graph
    fs.readFile(file_path_vertex, (err, data) => { 
        if (err){
            console.log("done");
            throw err; 
        } 
        // separate by tab
        var data = data.toString(); 
        var data = data.replace(/\n/g, " "); 
        var tabs = data.split(' ');
        for(var i = 0; i < tabs.length-2; i+=2){
            graph.insertEdge(tabs[i], tabs[i+1]); 
        }
    })
}

var testGraph = new Graph(); 
var file_path1 = "../Data/cityxy.txt"
var file_path2 = "../Data/citypairs.txt"
build(file_path1, file_path2, testGraph); 