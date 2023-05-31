
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
