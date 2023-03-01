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
/**
 * Optimized with O(1) space complexity
 * @param {number[]} nums
 * @param {numer} k;
 * @returns {void}
 *
 * **/
const rotateOptimized = function (nums, k) {
  const length = nums.length;
  if (length < 2) {
    return;
  }
  //find optimized value of k
  if (k >= length) {
    k = k % length;
  }
  const firstElement = nums[0];
  let left = 0;
  let right = left + k;

  while (left < length) {
    if (left > 0 && nums[left] == firstElement) {
      console.log(`breaking for left:${left}`);
      break;
    }
    const rthValue = nums[right];
    let lMinus1thIndex = left == 0 ? length - 1 : left - 1;
    const lMinus1ThValue = nums[lMinus1thIndex];
    nums[right] = nums[left];
    nums[lMinus1thIndex] = rthValue;
    nums[left] = lMinus1ThValue;
    left++;
    //calculate rth value
    right = right == length - 1 ? 0 : right + 1;
  }
  console.log(`nums:optimized:`, nums);
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateOptimized([1, 2, 3, 4, 5, 6, 7], 3));
