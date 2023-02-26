/**
  * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
**/
import ListNode from "./list";
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let current = head as ListNode;
  let previous: ListNode | null = null;
  let counter = 0;
  while (current || (counter >= left && counter <= right)) {
    let next = current?.next;
    counter++;
    if (counter <= left || counter >= right) {
      continue;
    }
    current.next = previous as ListNode;
    previous = { ...current } as ListNode;
    current = { ...next } as ListNode;
  }
  return previous;
}
