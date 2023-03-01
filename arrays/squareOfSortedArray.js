/**
* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
* **/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  let p = right;
  while (left <= right) {
    if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
      result[p--] = Math.pow(nums[left++], 2);
    } else {
      result[p--] = Math.pow(nums[right--], 2);
    }
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
