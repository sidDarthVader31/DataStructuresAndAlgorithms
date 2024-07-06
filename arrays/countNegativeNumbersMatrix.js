/**
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
 * link: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/?envType=study-plan-v2&envId=binary-search 
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i = 0;i< grid.length;i++){
        let row = grid[i];
        count  = count + countNums(row)
    }  
    return count
};

const countNums = (nums)=>{
    let left = 0;
    let right = nums.length-1;
    //find largest negative element;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]< 0){
            right= mid-1;
        }
        else {
            left= mid+1;
        }
    }
    return nums.length-left;
}
