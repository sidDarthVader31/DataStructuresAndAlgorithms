/**
* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let count = 0;
  let position = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target && count == 0) {
      position = i;
      count++;
    } else if (nums[i] == target && count > 0) {
      count++;
    }
  }
  if (position == -1) {
    return [-1, -1];
  } else {
    return [position, position + count - 1];
  }
};
const searchRangeOptimized = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  let leftPosition = -1;
  let rightPosition = -1;
  let position = -1;

  return [leftPosition, rightPosition];
};

const binarySearch = (nums, left, right, target) => {
  if (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      return binarySearch(nums, mid + 1, right, target);
    } else {
      return binarySearch(nums, left, mid - 1, target);
    }
  }
  return -1;
};
console.log(`binary search`, binarySearch([5, 7, 7, 8, 9, 10], 0, 5,8));
//console.log(`result:::`, searchRangeOptimized([5, 7, 7, 8, 8, 10], 8));
