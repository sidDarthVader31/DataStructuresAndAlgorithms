/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 *
 * link: https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0;
  let right = 1;
  while(left < nums.length && right < nums.length){
    if(nums[left] == 0 && nums[right] == 0){
        right++;
    }
    else if (nums[left] == 0 ){
        nums[left] = nums[right]
        nums[right] = 0;
        right++;
        left++;
    }
    else{
        left++
        right++;
    }
  }
  return nums  
};
