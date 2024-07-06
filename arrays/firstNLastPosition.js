/**Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


 * link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=study-plan-v2&envId=binary-search 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const left = countNumsLess(nums, target)
    const right = countNumsMore(nums, target)
    return [left, right]
};
const countNumsMore = (nums, target) => {
    let left = 0;
    let right = nums.length -1 ;
    let isFound = false
    while(left <= right){

        let mid = Math.floor((left+right)/2);
        if(nums[mid]== target){
            isFound = true;
        }
        if(nums[mid]<=target){
            left = mid+1;
        }
        else{
            right = mid -1;
        }
    }
    if(!isFound){
        return -1;
    }
   return left-1;
}
const countNumsLess = (nums, target)=>{
    let left = 0 ;
    let right = nums.length -1 ;
    let isFound = false;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]== target){
            isFound = true;
        }
        if(nums[mid]< target){
            left = mid+1
        }
        else{
            right = right-1
        }
    }
    if(!isFound){
        return -1;
    }
    return left;
}

