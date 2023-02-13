/**
 * You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.
Example 1- 
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

Example 2 - 
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
 */

/**
 * Difficulty : HARD
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    let returnValue= false;
    for(let i=0;i<=nums.length;i++){
        for(let j=i+1;j<=i+indexDiff;j++){
            if(Math.abs(nums[i]-nums[j])<= valueDiff && i!=j){
                returnValue = true;
                break;
            }
        }
    }
    return returnValue;
};



console.log(containsNearbyAlmostDuplicate([4,1,-1,6,5],3,1))