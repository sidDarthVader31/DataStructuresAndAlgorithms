/**
 * link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    //find rotating index

    let index = -1;
    for(let i = 0;i < nums.length;i++){
        if(nums[i]< nums[i-1]){
            index = i;
            break;
        }
    }
    if(index == -1){
        return true;
    }
    let isRestSorted = true;
    for(let i = index;i< nums.length-1;i++){
        if(nums[i] > nums[i+1]){
            isRestSorted = false;
            break;
        }
    }
    if(isRestSorted && nums[0] >= nums[nums.length-1]){
        return true;
    }
    else{
        return false;
    }
};
