/**Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  //get map of number of occurences of all the elements
  let map = {};
  let current = head;
  while (current) {
    let val = current.val;
    if (map[`${val}`]) {
      map[`${val}`] = map[`${val}`] + 1;
    } else {
      map[`${val}`] = 1;
    }
  }
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    if (map[`${current.val}`] > 1) {
      //duplicate element, remove this node
      current.next = null;
      //shift head if first element
      if (!prev) {
        head = next;
      } else {
        prev.next = next;
      }
    } else {
      prev = current;
    }
    current = next;
  }
  return head;
};

const removeDuplicatesOptimized = (head) => {
  if (!head || !head.next) {
    return head;
  }
};
