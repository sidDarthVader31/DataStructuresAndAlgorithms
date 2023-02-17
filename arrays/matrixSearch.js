

/**
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //get row on which to search 
    const row = binarySearchMatrix(matrix,target);
    return binarySearch(matrix[row],target)
};

/**
 * function to perform binary search on an array
 * @param {number[]} array 
 * @param {number} target 
 * @returns boolean
 */
const binarySearch=(array, target)=>{
    var startIdx = 0;
	var endIdx = array.length;
	while(endIdx > startIdx){
		var midIdx = Math.floor((startIdx + endIdx)/2);
		if(target > array[midIdx]){
			startIdx = midIdx + 1;
		}
		else if(target < array[midIdx]){
			endIdx = midIdx;
		}
		else{
			return true;
		}
	}
	return false;
}

/**
 * function performs a binary search on an 2D array to find out on which row the target value may be present
 * @param {number[][]} matrix 
 * @param {number} target 
 * @returns 
 */
const binarySearchMatrix=(matrix, target)=>{
    let left=0;
    let right= matrix.length;
    const length= matrix.length;
    let position=0;
    while(left<right){
        let mid=  Math.floor((left+right)/2);
        const midElement= matrix[mid][0];
         if(target>= midElement && mid==length-1){
            position= mid;
            break;
         }
         else if( target>=midElement && target<matrix[mid+1][0]){
            position= mid;
            break;
         }
         else if(target<midElement){
            right=mid;
         }
         else {
            left =mid;
         }
    }
    return position
}

console.log(searchMatrix([[1],[3],[5]],5))