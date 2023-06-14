/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return recursive(root);
};

const recursive = (root) => {
  let leftNode = root.left;
  let rightNode = root.right;
  if (leftNode == null && rightNode == null) {
    return true;
  } else if (leftNode == null && rightNode != null) {
    return false;
  } else if (leftNode && rightNode == null) {
    return false;
  } else if (leftNode.val < root.val && rightNode.val > root.val) {
    const flag = recursive(leftNode);
    return flag && recursive(rightNode);
  } else {
    return false;
  }
};
