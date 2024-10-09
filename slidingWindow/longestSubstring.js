/**
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 let map = {};
 let left = 0;
 let maxLength = 0;
 for(let right = 0;right<s.length;right++){
    let rightChar = s.charAt(right);
    if(map[rightChar]!= undefined){
        //we need to shrink the window 
        left = Math.max(left, map[rightChar] + 1);
    }
    map[rightChar] = right;
    maxLength = Math.max(maxLength, right-left + 1);
 }
 return maxLength
};
