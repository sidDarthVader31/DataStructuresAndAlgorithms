/**
* Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
**/
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
var isValidBSTOptimized = function (root) {
  return recursiveOptimizied(root, null, null);
};

const recursiveOptimizied = (root, min, max) => {
  if (!root) {
    return true;
  }
  if (min && root.val <= min.val) {
    return false;
  }
  if (max && root.val >= max.val) {
    return false;
  }
  return recursive(root.left, min, root) && recursive(root.right, root, max);
};
