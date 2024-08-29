/**
 * link : https://leetcode.com/problems/subarray-product-less-than-k/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    let left = 0;
    for(let right = 0;right < nums.length; right ++){
        let product = 1;
        while(product < k && left < nums.length){
            product = product * nums[left];
           if(product < k){
             count++;
           }
            left++;
        }
        product = 1;
        left = right+1;
    }
    return count;
};
