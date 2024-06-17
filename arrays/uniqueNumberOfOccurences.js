/**
 *Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 *
 *
 * link: https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {}

    for(let i = 0;i< arr.length;i++){
        if(!map[`${arr[i]}`]){
            map[`${arr[i]}`] = 1;
        }
        else {
            map[`${arr[i]}`] = map[`${arr[i]}`]+1;
        }
    }
  
  let output = []
    for (const key of Object.keys(map)){
        output.push(map[key]) 
    }
    let set = new Set(output)
    return output.length == set.size;
};
