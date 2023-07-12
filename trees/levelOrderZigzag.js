/**
* Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
      if(root == null){
      return []
    }
    let result = [];
    let height = 0;
    let currentLevel = [];
    let queue = [root];
    queue.push(null);

    while(queue.length > 0){
      let currentNode = queue.shift();
      if(currentNode){
        currentLevel.push(currentNode.val);
        if(currentNode.left){
          queue.push(currentNode.left);
        }
        if(currentNode.right){
          queue.push(currentNode.right)
        }
      }
      else {
        //currentLevel.push(null);
        if(result.length % 2 ==0){
  result.push(currentLevel);
        }
        else{
          result.push(currentLevel.reverse())
        }
        currentLevel = [];
        if(queue.length > 0){
          queue.push(null)
        }
      }
    }
    return result;
};
