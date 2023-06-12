/**
* Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
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
var isSymmetric = function (root) {
  return isSame(root.left, root.right);
};
const isSame = (left, right) => {
  if (left == null && right == null) {
    return true;
  } else if (left == null && right != null) {
    return false;
  } else if (left != null && right == null) {
    return false;
  } else if (left.val != right.val) {
    return false;
  } else {
    const flag = isSame(left.left, right.right);
    const flag2 = isSame(left.right, right.left);
    return flag && flag2;
  }
};
