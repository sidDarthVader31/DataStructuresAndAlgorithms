/**
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum =0;
    let leftSumArray=[0];
    let rightSumArray=[];
    rightSumArray.push(0);
    let rightSum= 0;
    let pivot=-1;
    //get left sum of all elements
    for(let i=1;i<nums.length;i++){
        leftSum = leftSum+ nums[i-1]
        leftSumArray.push(leftSum);
    }
    //get right sum of all elements
    for(let i=nums.length-2;i>=0;i--){
        rightSum = rightSum+ nums[i+1];
        rightSumArray.push(rightSum);
    }
    for(let i=0;i<nums.length;i++)
    {
        if(leftSumArray[i]=== rightSumArray[nums.length-i-1]){
            pivot=i;
            break;
        }
    }
    return pivot;
};
console.log(pivotIndex([2,1,-1]));