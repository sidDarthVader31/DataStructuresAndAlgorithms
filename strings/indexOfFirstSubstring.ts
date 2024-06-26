/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 * link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
  **/ 
function strStr(haystack: string, needle: string): number {
   let left = 0;

   while(left< haystack.length){
    if(haystack.charAt(left) === needle.charAt(0)){
        //check for whole length
        let str = haystack.substring(left, left+ needle.length);
        if(str == needle){
            return left;
        }
        else{
            left++;
        }
    }
    else{
        left++;
    }
   } 
   return -1;
};
