/**
 * Implement a stack with a linkedList
 **/

class Stack {
  head;
  current;

  constructor(head) {
    this.head = head;
    this.current = this.head;
  }

  pop() {
    let temp = this.head;
    this.head = this.head.next;
    return temp;
  }

  push(node) {
    node.next = this.current;
    this.head = node;
  }
}
