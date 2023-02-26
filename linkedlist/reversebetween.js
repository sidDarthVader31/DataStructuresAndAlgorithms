


/**
 * Definition for singly-linked list.
 * function (val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {} head
 * @param {number} left
 * @param {number} right
 * @return {}
 */
var reverseBetween = function(head, left, right) {
    if(!head.next){
      return head;
    }
    if(left == right){
      return head;
    }
    let current= head;
    let previous = null;
    let previousInside = null;
    let nextInside = null;
    let counter = 1;
    while (counter <= right) {
      let next = current.next;
      if (counter === left) {
        previousInside = previous  ;
      }
      previous = { ...current }  ;
      current = { ...next }  ;
      if (counter === right) {
        nextInside = next  ;
      }
      counter++;
    }
    current = {...previousInside?.next}  ;
    previous = current  ;
    let secondNode = current.next  ;
    counter = left + 1;
    while ( secondNode && counter <= right) {
      let next = secondNode?.next;
      secondNode.next = previous;
      previous = { ...secondNode } ;
      secondNode = { ...next } ;
      counter++;
    }
    if (previousInside) {
      previousInside.next = previous  ;
    }
    if(current){
      current.next = nextInside;
    }
  //  current.next = nextInside;
  
    return previousInside ;
  };