/**
 * Get maximum depth of a binary tree
 **/
const getMaxDepth = (root) => {
  if (root == null) {
    return maxDepth;
  }
  const maximumDepth = recursion(root, 1);
};

const recursion = (root, height) => {
  if (root == null) {
    return height;
  }
  height++;
  let leftHeight = recursion(root.left, height);
  let rightHeight = recursion(root.right, height);
  let maxOfTwo = Math.max(leftHeight, rightHeight);
  return maxOfTwo;
};
