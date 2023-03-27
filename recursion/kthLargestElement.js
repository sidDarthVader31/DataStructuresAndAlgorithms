/**
* Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
* */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  quickSort(nums, 1, nums.length);

  return nums[nums.length - k];
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    let q = partition(arr, left, right);
    quickSort(arr, left, q - 1);
    quickSort(arr, q + 1, right);
  }
};
const partition = (arr, left, right) => {
  let x = arr[right - 1];
  let i = left - 1;
  for (let j = left - 1; j < right; j++) {
    if (arr[j] <= x) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i = i + 1;
    }
  }
  return i;
};
