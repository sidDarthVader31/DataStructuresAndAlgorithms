/**
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

 *
 * link ; https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let i=0;
    let j = i+1;
    let output = '';

s = s.trim()
    while(i< s.length){
          if(s.charAt(i) == ' '){
            i++;
            j= i+1
            continue;
        }
      if(s.charAt(j) == ' '){
        let substring = s.substring(i, j)
          output = ' ' + substring   + output;
        i =j+1;
        j = i+1;
      }
        else if(j >= (s.length-1)){
            let substring = s.substring(i);
            output =  substring   + output;
            i = j+1;
            j = i+1;
        }
        else{
            j++;
        }
    }
    return output
};
