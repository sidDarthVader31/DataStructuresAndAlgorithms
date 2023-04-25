/**
* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
**/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = mergeArrays(nums1, nums2);
  const length = mergedArray.length;
  if (length % 2 != 0) {
    const index = (length + 1) / 2;
    return mergedArray[index - 1];
  } else {
    const sum = mergedArray[length / 2 - 1] + mergedArray[length / 2];
    return sum / 2;
  }
};

const mergeArrays = (leftArray, rightArray) => {
  let output = [];
  let current = 0;
  let i = 0,
    j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      output[current] = leftArray[i];
      i++;
    } else {
      output[current] = rightArray[j];
      j++;
    }
    current++;
  }
  for (let k = i; k < leftArray.length; k++) {
    output[current] = leftArray[k];
    current++;
  }
  for (let l = j; l < rightArray.length; l++) {
    output[current] = rightArray[l];
    current++;
  }

  return [...output];
};
