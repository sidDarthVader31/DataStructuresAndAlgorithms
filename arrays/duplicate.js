/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map={};
    let isDuplicate = false;
    for(let i=0;i<nums.length;i++){
        console.log(map[nums[i]], nums[i]);
        if(map[nums[i]]!== undefined){
            console.log(`isduplicate is true:`)
            isDuplicate = true;
            break;
        }
        map[nums[i]]=i;
    }
    return isDuplicate;
};

console.log(containsDuplicate([1,2,3,1,4]))