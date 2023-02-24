/**
 *
 *List node class for to be used for linked list problems.
 */

class ListNode {
  value: any;
  next: ListNode;
  constructor(value: any, next?: ListNode) {
    this.value = value;
    this.next = next;
  }
  getValue() {
    return this.value;
  }
  getNode() {
    return this.next;
  }
  setValue(value: any) {
    this.value = value;
  }
  setNext(next: ListNode) {
    this.next = next;
  }
}
export default ListNode;
