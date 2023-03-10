/**
* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let cur1 = null;
  let cur2 = null;
  let final = null;
  if (cur1.val <= cur2.val) {
    final = list1;
    cur1 = cur1.next;
    cur2 = list2;
  } else {
    final = list2;
    cur1 = list1;
    cur2 = list2.next;
  }
  while (cur1 || cur2) {
    if (cur2.val <= cur1.val) {
      // cur2.next = cur1;
      // cur1 = cur1.next;
      final.next = cur1;
      cur1 = cur1.next;
    } else if (cur1.val < cur2.val) {
      final.next = cur1;
      cur2 = cur2.next;
    }
  }
  return final;
};
