// Imports
var math = require("math");
var vertex = require("./Graph.js");

// Min Heap Implementation
class minHeap {
  // min heap constructor
  constructor() {
    // declare backing data structure
    this.heap = [];
    this.size = 0;
  }

  // top method
  top() {
    // return vertex at the top of the priority queue
    if (this.heap.length == 0) {
      // empty
      return null;
    }
    return this.heap[0];
  }

  // insert method
  insert(data) {
    //push data onto heap
    this.heap.push(data);
    this.bubbleUp();
    this.size += 1;
  }

  // bubble up method
  bubbleUp() {
    var index = this.heap.length - 1;
    while (index > 0) {
      var vertex = this.heap[index];
      var parentIndex = math.floor((index - 1) / 2);
      var parent = this.heap[parentIndex];
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
          // position found
          break;
        }
      } else {
        // swap nodes
        this.heap[index] = parent;
        this.heap[parentIndex] = vertex;
        index = parentIndex;
      }
    }
  }

  // pop method
  remove() {
    // swap first and last element
    var element = this.heap[this.size - 1];
    this.heap[0] = element;
    // remove last element and trickle down
    this.heap.pop();
    this.sinkDown(0);
    this.size -= 1;
  }

  sinkDown(index) {
    var left = (2 * index + 1); 
    var right = (2 * index + 2); 
    var largest = index;
    const length = this.heap.length - 1;
    // if left child dist is less than parent
    if (left <= length && this.heap[left].dist <= this.heap[largest].dist) {
      if(this.heap[left].dist == this.heap[largest].dist && this.heap[left].name < this.heap[largest].name){
        largest = left; 
      }
      else if (this.heap[left].dist < this.heap[largest].dist){
        largest = left;
      } 
    }
    // if right child dist is less than parent
    if (right <= length && this.heap[right].dist <= this.heap[largest].dist) {
      if(this.heap[left].dist == this.heap[largest].dist && this.heap[left].name < this.heap[largest].name){
        largest = right; 
      }
      else if (this.heap[right].dist < this.heap[largest].dist){
        largest = right;
      } 
    }
    // swap
    if (largest != index) {
      this.heap[largest] = this.heap[index]; 
      this.heap[index] = this.heap[largest]; 
      this.sinkDown(largest);
    }
  }
}

// TESTS
var vertex1 = new vertex();
vertex1.dist = 29;
vertex1.name = "andres";
var vertex2 = new vertex();
vertex2.dist = 34;
vertex2.name = "nestor";
var vertex3 = new vertex();
vertex3.dist = 5;
vertex3.name = "yadira";
var vertex4 = new vertex();
vertex4.dist = 29;
vertex4.name = "eric";
var vertex5 = new vertex();
vertex5.dist = 77;
vertex5.name = "yolanda";
var vertex6 = new vertex();
vertex6.dist = 56;
vertex6.name = "maria";
var min = new minHeap();

min.insert(vertex4);
console.log(min.top().name, min.top().dist);
min.insert(vertex2);
console.log(min.top().name, min.top().dist);
min.insert(vertex6);
console.log(min.top().name, min.top().dist);
min.insert(vertex1);
console.log(min.top().name, min.top().dist);
min.insert(vertex5);
console.log(min.top().name, min.top().dist);
min.insert(vertex3);
console.log(min.top().name, min.top().dist);

while(min.size != 0){
  //console.log(" Top Element: ", min.top().dist, min.top().name);
  min.remove();
}
