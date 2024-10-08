/**
* link : https://leetcode.com/problems/minimum-size-subarray-sum/description/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let left = 0 ;
    let minLength = Infinity;
    for(let right = 0;right < nums.length;right++){
        sum = sum + nums[right];
        while(sum >=target){
            minLength = Math.min(minLength, right-left+1);
            sum = sum - nums[left];
            left++
        }
    }
    return minLength === Infinity ? 0 : minLength
};
