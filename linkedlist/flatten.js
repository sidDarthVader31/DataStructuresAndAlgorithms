/**
* ou are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

 

Example 1:


Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:

Example 2:


Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:

Example 3:

Input: head = []
Output: []
Explanation: There could be empty list in the input.
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return null;
  }
  let current = head;

  while (current) {
    let next = current.next;
    if (current.child) {
      let flatList = flatten(current.child);
      current.next = flatList;
      flatList.prev = current;
      //assign last element of flatList to next
      while (flatlist.next) {
        // to avoid this loop we can use another function for recursion that returns head and tail
        flatList = flatList.next;
      }
      flatList.next = next;
      next.prev = flatList;
      current.child = null;
    }
    current = current.next;
  }
  return head;
};

const flattenOptimized = (head) => {
  if (!head) {
    return null;
  }
  let current = head;

  while (current) {
    let next = current.next;
    if (current.child) {
      //find last element of the child list
      let child = current.child;
      while (child.next) {
        child = child.next;
      }
      child.next = next;
      if (next) {
        next.prev = child;
      }
      current.next = current.child;
      current.child.prev = current;
      current.child = null;
    }
    current = current.next;
  }
};

function flattenRecursion(head: _Node | null, lastNode?: _Node| null): _Node | null {
    let current = head;
    if(!head){
        return null;
    }
    while(current.next){
        let next = current.next;
        if(!current.child){
            current = next;
        }
        else{
            let temp = flatten(current.child, next);
            temp.prev = current;
            current.next
            current.child = null;
            current = next;
        }
    }
    if(lastNode){
        lastNode.prev = current;
        current.next = lastNode;
    }
    return head;
};
