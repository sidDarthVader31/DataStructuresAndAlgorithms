/**
 * implementing a queue with a linked list
 *
 **/

class Queue {
  head;
  latest;
  constructor(head) {
    //call this constructor to create a new queue
    this.head = head;
    this.latest = this.head;
  }
  /**
   *  add an element to the queue
   **/
  enqueue(node) {
    //to add an element in FIFO fashion we add it to the next of the head
    this.latest.next = node;
  }
  dequeue() {
    let temp = this.head;
    this.head = this.head.next;
    return temp;
  }
}
