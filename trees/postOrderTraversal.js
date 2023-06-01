
/**
*Node: {left: Node, right: Node, value: any}
 **/  
const postOrderTraversal = (root: Node){
  if(root!= null){
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.value);
  }
}

const postOrderTraversalIterative = (root: Node){
  let res = [];
  let stack = [];
  if(root == null){
    return res;
  }
  stack.push(root);
  let prev= null;
  while(stack.length > 0 ){
    let curr = stack.peek(); //peek function of a stack .. not a valid js function 
    if(prev == null || prev.left == curr|| prev.right == curr){
      if(curr.left != null){
        stack.push(curr.left);
      }
      else if ( curr.right != null){
        stack.push(curr.right)
      }
    }
    else if ( curr.left == prev){
      if(curr.right != null){
        s.push(curr.value)
      }
    }
    else{
      res.add(curr.data);
      stack.pop();
    }
  }
  return res;
}
