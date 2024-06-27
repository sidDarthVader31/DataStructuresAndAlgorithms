/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 * link: https://leetcode.com/problems/valid-palindrome-ii/
 */ 



function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    while(left< right){
        if(s.charAt(left) == s.charAt(right)){
            left++;
            right--
        }
        else if (isPalindrome(s.substring(left, right))|| isPalindrome(s.substring(left+1, right+1))){
            return true;
        }
        else{
            return false;
        }
    }  
    return true;
};


function isPalindrome(word: string): boolean {
    let left = 0;
    let right = word.length-1;

    while(left < right){
        if(word.charAt(left)!= word.charAt(right)){
            return false;
        }
        else{
            left++;
            right--;
        }
    }
    return true;
}
