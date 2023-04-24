/**
* Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
* */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  quickSort(nums, 1, nums.length);
};

const quickSort = (nums, left, right) => {
  if (left < right) {
    let q = partition(nums, left, right);
    quickSort(nums, left, q - 1);
    quickSort(nums, q + 1, right);
  }
};

const partition = (nums, left, right) => {
  let x = nums[right - 1];
  let i = left - 1;

  for (let j = left - 1; j < right; j++) {
    if (nums[j] <= x) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
    }
  }
  return i;
};
