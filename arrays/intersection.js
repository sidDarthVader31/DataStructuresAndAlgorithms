/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  let finalSum = [];
  for (let i = 0; i < nums2.length; i++) {
    if (map[`${nums2[i]}`]) {
      map[`${nums2[i]}`] = map[`${nums2[i]}`] + 1;
    } else {
      map[`${nums2[i]}`] = 1;
    }
  }
  let pushCount = {};
  for (let i = 0; i < nums1.length; i++) {
    if (map[`${nums1[i]}`]) {
      if (!pushCount[`${nums1[i]}`]) {
        pushCount[`${nums1[i]}`] = 0;
      }
      if (pushCount[`${nums1[i]}`] < map[`${nums1[i]}`]) {
        finalSum.push(nums1[i]);
        pushCount[`${nums1[i]}`] = pushCount[`${nums1[i]}`] + 1;
      }
    }
  }
  return finalSum;
};
console.log(intersect([1, 2, 2, 1], [2]));
