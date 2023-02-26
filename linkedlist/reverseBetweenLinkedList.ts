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
  let previous: ListNode | null = null;
  let previousInside: ListNode | null = null;
  let nextInside: ListNode | null = null;
  let counter = 1;
  while (counter <= right) {
    let next = current.next;
    if (counter === left) {
      previousInside = previous as unknown as ListNode;
    }
    previous = { ...current } as unknown as ListNode;
    current = { ...next } as unknown as ListNode;
    if (counter === right) {
      nextInside = next as unknown as ListNode;
    }
    counter++;
  }
  if(previousInside?.next){
    current = previousInside.next as unknown as ListNode;
  }
  else{
    current = head;
  }
  previous = current as unknown as ListNode;
  let secondNode = current.next as unknown as ListNode;
  counter = left + 1;
  while (counter <= right) {
    let next = secondNode.next;
    secondNode.next = previous;
    previous = { ...secondNode } as ListNode;
    secondNode = { ...next } as ListNode;
    counter++;
  }
  if (previousInside) {
    previousInside.next = previous as unknown as ListNode;
  }
  else{
    previousInside = previous;
  }
  current.next = nextInside;

  return previousInside as ListNode;
}

function constructListNode(): ListNode {
  // const l5 = new ListNode(5, null);
  // const l4 = new ListNode(4, l5);
  // const l3 = new ListNode(3, l4);
  const l2 = new ListNode(2, null);
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
  const newHead = reverseBetween(head, 1, 2) as ListNode;
  //print the list
  printList(newHead);
}
execute();