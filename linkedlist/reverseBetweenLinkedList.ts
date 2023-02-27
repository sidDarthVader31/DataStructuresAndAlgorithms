/**
  * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
 
Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2r:
Input: head = [5], left = 1, right = 1
Output: [5]
**/
import ListNode from "./list";
function reverseBetween(head: ListNode, left: number, right: number): ListNode {
  let current: ListNode = head;
  let start: ListNode = head;
  let counter = 1;
  //get start and end nodes
  while (counter < left) {
    start = current;
    current = current.next as unknown as ListNode;
    counter++;
  }
  let previous: ListNode | null = null;
  let tail = current;

  while (counter <= right) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next as unknown as ListNode;
    counter++;
  }
  start.next = previous;
  tail.next = current;

  return (left === 1 ? previous : head) as unknown as ListNode;
}

function constructListNode(): ListNode {
  const l6 = new ListNode(6, null);
  const l5 = new ListNode(5, l6);
  const l4 = new ListNode(4, l5);
  const l3 = new ListNode(3, l4);
  const l2 = new ListNode(2, l3);
  const l1 = new ListNode(1, l2);
  return l1;
}
function printList(head: ListNode): void {
  console.log(`printing linked list`);
  let currentNode: ListNode = head;
  while (currentNode) {
    console.log(JSON.stringify(currentNode));
    currentNode = currentNode.next as ListNode;
  }
  console.log(`printing linked list end`);
}
function execute() {
  const head = constructListNode();
  const newHead = reverseBetween(head, 3, 5) as ListNode;
  //print the list
  printList(newHead);
}
execute();
