/**
* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Num = "";
  let l2Num = "";
  let current1 = l1;
  let current2 = l2;
  while (current1) {
    l1Num = l1Num + current1.val;
    current1 = current1.next;
  }
  while (current2) {
    l2Num = l2Num + current2.val;
    current2 = current2.next;
  }
  const num1String = l1Num.split("").reverse().join("");
  const num1 = BigInt(num1String);

  const num2String = l2Num.split("").reverse().join("");
  const num2 = BigInt(num2String);

  const result = BigInt(num1 + num2);
  let head = result
    .toString()
    .split("")
    .reduce((acc, curr) => {
      if (acc == null) {
        acc = new ListNode(curr);
      } else {
        acc = new ListNode(curr, acc);
      }
      return acc;
    }, null);
  return head;
};


const addTwoNumbersOptimized=(l1,l2)=>{
  let sum =0;
  let carry =0;
  let prev = null;
  while(l1|| l2){
    if(l1){
      sum = sum + l1.val;
    }
    if(l2){
      sum =sum2 + l2.val;
    }
    sum = sum +carry;
    if(sum >0){
      carry = 1;
      sum = sum %10;
    }
    Listnode node = new ListNode();
    node.val = sum;
    if(prev){
      prev.next = node;
    }
    else{
      prev = node;
    }
  }
  return prev;
}
