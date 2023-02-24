/**
 *
 *List node class for to be used for linked list problems.
 */

class ListNode {
  value: any;
  next: ListNode | null;
  constructor(value: any, next: ListNode | null) {
    this.value = value;
    this.next = next;
  }
}
export default ListNode;
