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
  let first: ListNode = head;
  let previous: ListNode | null = null;
  let previousInside: ListNode | null = null;
  let nextInside: ListNode | null = null;
  let counter = 1;
  while (Object.keys(current).length > 0) {
    let next = current.next;
    if (counter === left) {
      previousInside = { ...previous } as unknown as ListNode;
    }
    previous = { ...current } as unknown as ListNode;
    current = { ...next } as unknown as ListNode;
    if (counter === right) {
      nextInside = { ...next } as unknown as ListNode;
    }
    counter++;
  }
  previous = null;
  current = head;
  counter = 1;
  while (Object.keys(current).length > 0) {
    let next = current.next;
    if (counter == left) {
      current.next = nextInside;
    } else if (counter == right) {
      current.next = previousInside;
    } else if (counter > left && counter < right) {
      current.next = previous;
    }
    previous = { ...current } as ListNode;
    current = { ...next } as ListNode;
  }
  return first as ListNode;
}

function constructListNode(): ListNode {
  const l5 = new ListNode(5, null);
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
    console.log(currentNode);
    currentNode = currentNode.next as ListNode;
  }
  console.log(`printing linked list end`);
}
function execute() {
  console.log(`execute start`);
  const head = constructListNode();
  console.log(`head initial`, JSON.stringify(head));
  const newHead = reverseBetween(head, 2, 4) as ListNode;
  console.log(`new head :`, newHead);
  //print the list
  printList(newHead);
}
execute();
