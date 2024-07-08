/**
 * link: https://leetcode.com/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=binary-search
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0;i< matrix.length;i++){
        const row = matrix[i];
        const isPresent = search(row, target);
        if(isPresent){
            return true;
        }
    }
    return false
};

const search = (nums, target)=>{
    let left = 0;
    let right = nums.length -1 ;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            return true;
        }
        else if (target > nums[mid]){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return false;
}
