let maxDepth = 0;

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
  let leftHeight = recursion(root.left, height++);
  let rightHeight = recursion(root.right, height++);
  let maxOfTwo = Math.max(leftHeight, rightHeight);
  if (maxOfTwo > maxDepth) {
    maxDepth = maxOfTwo;
  }
};
