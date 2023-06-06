/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
*
*     Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pFlat = getBinaryTree(p);
  const qFlat = getBinaryTree(q);
  if (pFlat.length != qFlat.length) {
    return false;
  }
  for (let i = 0; i < pFlat.length; i++) {
    if (pFlat[i] != qFlat[i]) {
      return false;
    }
  }
  return true;
};

const getBinaryTree = (root) => {
  if (root == null) {
    return [null];
  } else if (root.left == null && root.right == null) {
    return [root.val];
  } else {
    return [
      root.val,
      ...getBinaryTree(root.left),
      ...getBinaryTree(root.right),
    ];
  }
};
