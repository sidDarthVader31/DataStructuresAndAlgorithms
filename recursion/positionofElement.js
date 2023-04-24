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
  return binarySearch(nums, left, right, target, -1, -1);
};

const binarySearch = (
  nums,
  left,
  right,
  target,
  leftPostion,
  rightPosition
) => {
  let leftPos = leftPostion;
  let rightPos = rightPosition;
  if (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target && leftPostion == -1) {
      //first encounter of target element

      leftPos = mid;
      rightPos = mid;
      [leftPos, rightPos] = binarySearch(
        nums,
        left,
        mid - 1,
        target,
        leftPos,
        rightPos
      );
      return binarySearch(nums, mid + 1, right, target, leftPos, rightPos);
    } else if (nums[mid] == target && leftPostion > -1) {
      //target has been found before
      if (mid < leftPostion) {
        leftPos = mid;
        [leftPos, rightPos] = binarySearch(
          nums,
          left,
          mid - 1,
          target,
          leftPos,
          rightPos
        );
        return binarySearch(nums, mid + 1, right, target, leftPos, rightPos);
      } else if (mid > rightPosition) {
        rightPos = mid;
        [leftPos, rightPos] = binarySearch(
          nums,
          left,
          mid - 1,
          target,
          leftPos,
          rightPos
        );
        return binarySearch(nums, mid + 1, right, target, leftPos, rightPos);
      }
    } else if (nums[mid] < target) {
      return binarySearch(nums, mid + 1, right, target, leftPos, rightPos);
    } else {
      return binarySearch(nums, left, mid - 1, target, leftPos, rightPos);
    }
  }
  return [leftPos, rightPos];
};
console.log(`result:::`, searchRangeOptimized([5, 7, 7, 8, 8, 10], 8));
