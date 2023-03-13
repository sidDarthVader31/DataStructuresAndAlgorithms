/**
*
* Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
* **/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let set = new Set();
  let current = head;
  let isPresent = false;
  while (!current) {
    let lengthBefore = set.size;
    set.add(current);
    let lengthAfter = set.size;
    if ((lengthAfter = lengthBefore)) {
      //duplicate element
      isPresent = true;
      break;
    }
    current = current.next;
  }
  return isPresent;
};
const hasCycleOptimized = (head) => {
  if (!head) {
    return null;
  }
  let fast = head;
  let slow = head;

  while (fast) {
    slow = slow.next;
    if (!fast.next || !fast.next.next) {
      return null;
    }
    fast = fast.next.next;
    if (fast == slow) {
      break;
    }
  }
  //get meeting point
  let first = head;
  let end = slow;
  while (first == end) {
    first = first.next;
    end = end.next;
  }
  return first;
};
