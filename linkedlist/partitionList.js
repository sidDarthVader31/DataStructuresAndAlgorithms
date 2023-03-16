/*Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

 

Example 1:


Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) {
    return null;
  }

  let smallHead = null;
  let largeHead = null;
  let prevSmall = null;
  let prevLarge = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = null;
    if (current.val < x) {
      if (!prevSmall) {
        prevSmall = current;
        smallHead = prevSmall;
      } else {
        prevSmall.next = current;
        prevSmall = prevSmall.next;
      }
    } else {
      if (!prevLarge) {
        prevLarge = current;
        largeHead = prevLarge;
      } else {
        prevLarge.next = current;
        prevLarge = prevLarge.next;
      }
    }
    current = current.next;
  }
  if (prevSmall) {
    prevSmall.next = largeHead;
    return smallHead;
  } else {
    return largeHead;
  }
};
