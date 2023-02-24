/**
 * Reverse a linkedList
 **/

import ListNode from './list';

function reverse(head: ListNode){
  let currentNode = new ListNode(head.getValue(), head.getNode());
  while(currentNode){
    let nextNode = new ListNode(currentNode.getValue(),currentNode.getNode());
  }
}
