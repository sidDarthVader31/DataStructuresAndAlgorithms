/**
 * 
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.


Return the leftmost pivot index. If no such index exists, return -1.} nums 


 * @returns 
 */



/** brute force
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let totalsum=0;
    let pivot=-1;
    for(let i=0;i<nums.length;i++){
        totalsum+=nums[i];
    }
    for(let i=0;i<nums.length;i++){
        let prefixSum =0;
        for(let j=0;j<i;j++){
            prefixSum+=nums[j];
        }
        let rightSum = totalsum - nums[i] -prefixSum;
        if(rightSum == prefixSum){
            pivot = i;
            break;
        }
    }
    return pivot;
}



/**
 * optimized
 */

const optimized= function(nums){
    let totalSum=0;
    let pivot=-1;
    let prefixSum=0;

    for(let i=0;i<nums.length;i++){
        totalSum+=nums[i];
    }


    for(let i=0;i<nums.length;i++){
        if(prefixSum == (totalSum - prefixSum - nums[i])){
            pivot =i;
            break;
        }
        prefixSum = prefixSum + nums[i];
    }
    return pivot;
}
console.log(optimized([1,7,3,6,5,6].reverse()))