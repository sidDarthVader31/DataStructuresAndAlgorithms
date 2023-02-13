/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let current = 0, i = 0,j = 0;
     const nums1Temp = Array.from(nums1, x => x);
     console.log(`nums!TEMP:${nums1Temp}`)
    while (i < m-1 && j < n-1) {
      if (nums1Temp[i] < nums2[j]) {
        nums1[current] = nums1[i];
        i++;
      } else {
        nums1[current] = nums2[j];
        j++;
      }
      current++;
      console.log(`i:${i}::j:${j}::${current}:nums1:::${nums1}`)
    }
    console.log(`middle:${nums1}`);
    for (let k = i; k < m; k++) {
      nums1[current] = nums1Temp[k];
      current++;
    }
    console.log(`after nums1:${nums1}`);
    for (let l = j; l < n; l++) {
      nums1[current] = nums2[l];
      current++;
    }
    console.log(`after nums2`,nums1)
};
merge([2,0],1,[1],1)