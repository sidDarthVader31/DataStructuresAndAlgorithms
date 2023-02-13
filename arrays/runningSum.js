/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let lastSum=0;
    let output=[];
    for(let i=0;i<nums.length;i++){
        lastSum= lastSum+nums[i];
        output[i]=lastSum;
    }
    return output;
};

console.log(runningSum([3,1,2,10,1]))