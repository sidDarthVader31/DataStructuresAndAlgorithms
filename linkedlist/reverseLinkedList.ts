import ListNode from "./list";
function reverse(head: ListNode) {
  console.log(`starting to reverse the node`);

  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let currentNode = new ListNode(head.value, head.next);
  let previous = new ListNode(null, null);
  let i=0;
  while (Object.keys(currentNode).length>0) {
    let nextNode = currentNode.next;
    currentNode.next=previous;
    previous = {...currentNode};
    currentNode = {...nextNode} as ListNode;
  }
  return previous;
}

function printAList(head: ListNode): void {
  let currentNode = head;
  while (currentNode != null) {
    console.log(`node:${JSON.stringify(currentNode)}`);

    currentNode = currentNode.next as ListNode;
  }
}
function contructLinkedList(): ListNode {
  let l5 = new ListNode(5, null);
  let l4 = new ListNode(4, l5);
  let l3 = new ListNode(3, l4);
  let l2 = new ListNode(2, l3);
  let l1 = new ListNode(1, l2);
  return l1;
}

function printReversedLinkedList() {
  let l1 = contructLinkedList();
  printAList(l1);
  const result = reverse(l1);
  console.log(`final result :${JSON.stringify(result)}`);
}

printReversedLinkedList();
