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
var isBalanced = function (root, count = 1) {
  if (root == null) {
    return true;
  } else if (!root.left && !root.right) {
    return true;
  } else {
    let leftDepth = maxDepth(root.left, count + 1);

    let rightDepth = maxDepth(root.right, count + 1);
    if (Math.abs(leftDepth - rightDepth) <= 1) {
      return true;
    } else {
      return false;
    }
  }
};
var maxDepth = function (root, count = 1) {
  if (root == null) {
    return 0;
  } else if (!root.left && !root.right) {
    //leaft node;
    return count;
  } else
    return Math.max(
      maxDepth(root.left, count + 1),
      maxDepth(root.right, count + 1)
    );
};
