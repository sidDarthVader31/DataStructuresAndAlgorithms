/**
 * Given a binary tree, return the level order travesal of the nodes' values as an array
 **/

const levelOrderTraversal = (root) => {
  if (root == null) {
    return [];
  }
  let queue = [root];
  let result = [];
  let currentLevel = [];
  queue.push(null);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode) {
      currentLevel.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentLevel.left);
      }
      if (currentNode.right) {
        queue.push(currentLevel.right);
      }
    } else {
      result.push(currentLevel);
      currentLevel = [];
      if (queue.length > 0) {
        queue.push(null); // we push null after every level
      }
    }
  }
  return result;
};
