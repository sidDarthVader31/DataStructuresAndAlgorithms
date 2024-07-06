/**
 * link: https://leetcode.com/problems/find-smallest-letter-greater-than-target/?envType=study-plan-v2&envId=binary-search
 *
 *
 *
 *
 * You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length -1 ;
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if (target>= letters[mid]){
            left = mid +1;
        }
        else {
            right = mid-1
        }
    }  
        return letters[left] || letters[0]
};
