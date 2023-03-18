/**Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  if (!head) {
    return null;
  }
  let current = head;
  //get length of list
  let length = 0;
  while (current) {
    current = current.next;
    length++;
  }
  let kthNode = length - k + 1;
  //ensure that kth node is always comes before
  if (kthNode < k) {
    let temp = k;
    k = kthNode;
    kthNode = temp;
  }
  let prev = null;
  let prevK = null;
  let kNode = null;
  let kNext = null;
  current = head;
  let counter = 0;
  while (current) {
    let next = current.next;
    counter++;
    if (counter == k) {
      prevK = prev;
      kNode = current;
      kNext = null;
    } else if (counter == kthNode) {
      if (prevK) {
        prevK.next = current;
      } else {
        head = current;
      }
      if (current == kNext) {
        prev.next = next;
        current.next = prev;
      } else {
        current.next = kNext;
        prev.next = kNode;
      }
      kNode.next = next;
      break;
    }
    prev = current;
    current = next;
  }
  return head;
};
