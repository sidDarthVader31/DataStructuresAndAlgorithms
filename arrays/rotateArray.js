/**
*Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] 
* **/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let output = [...nums];
  let length = output.length;
  if (length < 2) {
    return;
  }
  //find the optimal value of k
  if (k >= length) {
    k = k % length;
  }
  for (let i = 0; i < length; i++) {
    if (i + k >= length) {
      nums[i + k - length] = output[i];
    } else {
      nums[i + k] = output[i];
    }
  }

  console.log("##############", nums);
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
