

/**
 *Node : {left: Node, right: Node, value: any}
 **/ 
const preOrderTraversalRecursive=(Node: root){
  if(root!= null){
    console.log(root.value);
    preOrderTraversalRecursive(root.left);
    preOrderTraversalRecursive(root.right)
  }
}

const preOrderTraversalIterative=(Node: root){
  let response = [];
  if(root == null){
    return response;
  }
  let stack = [];
  stack.push(root);

  while(stack.length >0){
    let tempNode = stack.pop();
    response.push(tempNode.value);
    if(tempNode.right !== null){
      stack.push(tempNode.right);
    }
    if(tempNode.left !== null){
      stack.push(tempNode.left);
    }
  }
  return response
}
