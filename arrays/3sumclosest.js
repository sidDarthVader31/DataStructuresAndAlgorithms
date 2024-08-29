
/**
 * link : https://leetcode.com/problems/3sum-closest/description/
 *
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */ 


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let finalSum = -Infinity;
    let minDiff = Infinity;
    nums.sort((a, b) => a-b);
    for(let i =0;i< nums.length;i++) {
       let sum  = check(target- nums[i], nums, i+1) + nums[i];
         let diff = Math.abs(target - sum);
         if(diff < minDiff){
            finalSum = sum;
            minDiff = diff
         }
    }
    return finalSum;
};

const check = (target, arr,left) => {
    let right = arr.length-1;
    let greatestSum = -Infinity;
    let maxDiff = Infinity;
    while(left < right) {    
        let diff = Math.abs(target - (arr[left] + arr[right]));
       if(diff < maxDiff){
        greatestSum = arr[left]+ arr[right];
        maxDiff = diff;
       }
        if(arr[left]+ arr[right]> target) {
            right--;
        }
        else {
            left++;
        }
    }
    return greatestSum
}
