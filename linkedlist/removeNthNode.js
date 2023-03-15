/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!.head || !head.next){
    return null;
  }
  let length =0;
  let current = head;
  //find the length of List 
  while(current){
    length++;
    current = current.next;
  }
  //nth node from end will be length-n+1th node from start
  let counter =0;
  let prev = null;
  current = head;
  while(current){
    let next = current.next;
    if(counter == length-n+1){
      //remove this element
      if(prev){
        //element is in the middle/end 
        prev.next = next;
        current.next = null;
      }
      else{
        //first element of the list 
        current.next = null;
        prev = head;
      }
      break;
    }
    else{
      prev = current;
      current = next;
      counter++;
    }
  }
  return head;
}
