// Imports
var math = require("math");
var vertex = require("./Graph.js");

// Min Heap Implementation
class minHeap {
  // min heap constructor
  constructor() {
    // declare backing data structure
    this.heap = [0];
    this.size = 0;
  }

  // top method
  top() {
    // return vertex at the top of the priority queue
    return this.heap[0];
  }

  // insert method
  insert(data) {
    //push data onto heap
    this.heap.push(data);
    this.bubbleUp();
    this.heap.size += 1;
  }

  // bubble up method
  bubbleUp() {
    var index = this.heap.length - 1;
    while (index > 0) {
      vertex = this.heap[index];
      parentIndex = math.floor((index - 1) / 2);
      parent = this.heap[parentIndex];
      // continue to swap with parent until correct spot is found
      if (vertex.dist >= parent.dist) {
        // tie breaker
        if (vertex.dist == parent.dist) {
          if (vertex.name > parent.name) {
            //swap parent and child node
            this.heap[index] = parent;
            this.heap[parentIndex] = vertex;
            break;
          } else {
            //break out of loop
            break;
          }
        }
        // no tie breaker swap child and parent node
        else {
          // swap nodes
          this.heap[index] = parent;
          this.heap[parentIndex] = vertex;
        }
      }
    }
  }

  // pop method
  pop() {
      // swap first and last element
      element = this.heap[this.heap.size - 1]; 
      this.heap[0] = element; 
      // remove last element and trickle down
      this.heap.pop(); 
      trickleDown(); 
  }

  // trickle down method
  trickleDown() {}
}


// TESTS 
var vertex1 = new vertex(); 
vertex1.dist = 29; 
vertex1.name = "andres"; 
var vertex2 = new vertex(); 
vertex1.dist = 34; 
vertex1.name = "nestor"; 
var vertex3 = new vertex();
vertex1.dist = 5; 
vertex1.name = "yadira";  
var vertex4 = new vertex();
vertex1.dist = 29; 
vertex1.name = "eric";  
var vertex5 = new vertex();
vertex1.dist = 77; 
vertex1.name = "yolanda";  
var vertex6 = new vertex(); 
vertex1.dist = 56; 
vertex1.name = "maria"; 

var min = new minHeap(); 
min.insert(vertex1); 
min.insert(vertex2); 
min.insert(vertex3); 
min.insert(vertex4); 
min.insert(vertex5); 
min.insert(vertex6); 

console.log(min.top()); 
// for(i = 0; i < min.size ; i++){
//     console.log(min.top); 
//     min.pop(); 
// }
