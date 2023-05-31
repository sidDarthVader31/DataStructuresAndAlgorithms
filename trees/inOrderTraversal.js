const inOrderTraversalRecursive = (Node: root){
  if(root!= null){
    inOrderTraversalRecursive(root.left);
    console.log(root.value);
    inOrderTraversalRecursive(root.right);
  }
}

const inOrderTraversalIterative = (Node: root){
  let response = [];
  let stack = [];
  let currentNode = root;
  let isDone = false;
  while(!isDone){
    if(currentNode.left){
      stack.push(currentNode.left);
      currentNode = currentNode.left;
    }
    else {
      if(stack.length == 0){
        isDone = true;
      }
      else {
        currentNode = stack.pop();
        response.push(currentNode.value);
        if(currentNode.right){
          currentNode = currentNode.right;
        }
      }
    }
  }
  return response;
}
