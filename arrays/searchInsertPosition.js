/**
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 * https://leetcode.com/problems/search-insert-position/description/?envType=study-plan-v2&envId=binary-search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length -1 

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] == target){
            return mid;
        }
        else if (target > nums[mid]){
            left = mid+1
        }
        else{
            right = mid-1;
        } 
    }  
    return left
};
