/**
*
*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*
*
* Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root == null) {
    return [];
  }
  let result = [];
  let lastRowElement = null;
  let queue = [root];
  queue.push(null);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode) {
      lastRowElement = currentNode.val;
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    } else {
      if (lastRowElement != null) {
        result.push(lastRowElement);
        lastRowElement = null;
      }
      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }
  return result;
};
