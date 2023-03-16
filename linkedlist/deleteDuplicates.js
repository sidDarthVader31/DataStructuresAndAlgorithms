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
var deleteDuplicates = function(head) {
  if(!head || !head.next){
    return head;
  }

  let val = head.val;
  let current = head;
  let map ={};
  if(head.val == head.next.val){
  while(current){
    if(current.val != val){
      break;
    }
    current = current.val;
  }
  }
  let newHead = current;
  while(current){
    if(map[`${current.val}`]){
      map[`${current.val}`] = map[${current.val}] +1;
    }
    else{
      map[`${current.val}`] = 1;
    }
    current = current.next;
  }

  //remove elements 
  current = newHead;
  while(current){
    let next = current.next;
    if(map[`${current.val}`]){
      //delete this element 
    //check if first element 
      if(current == head){
        head = head?.next || null;
      }
      current.next = null;
      if(prev){
        prev.next = next;
      } 
    }
    current = current.next;
  }
  return newHead;
}
