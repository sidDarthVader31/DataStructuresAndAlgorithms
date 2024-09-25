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
 * @param {number} k;
 * @returns {void}
 *
 * **/
const rotateOptimized = function (nums, k) {
  const length = nums.length;
  //find optimized value of k
  if (k >= length) {
    k = k % length;
  }
  rotateArray(nums, 0, length - 1);
  rotateArray(nums, 0, k - 1);
  rotateArray(nums, l, length - 1);
};
/**
 * @param{number[]} array
 * @param {number} k
 * @returns {number[]}array
 * */
const rotateArray = (array, left, right) => {
  while (left <= right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateOptimized([1, 2, 3, 4, 5, 6, 7], 3));





/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let output = [...nums];
    k = k % nums.length;
    for(let i = 0;i< output.length;i++){
        if((i+k) < output.length){
            nums[i+k] = output[i]
        }
        else if (i+k - nums.length <=nums.length) {
            nums[i+k - nums.length] = output[i]
        }
    }
}
