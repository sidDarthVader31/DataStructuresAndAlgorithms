/**
* given a string find the length of the longest substring without repeating characters
*Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * **/

/**
 *@param{string} s
@returns {string}
 * **/
const largestSubstring = (s) => {
    let map = {};
    let subString = "";
    let finalSub = "";
    for (let i = 0; i < s.length; i++) {
      let ch = s.charAt(i);
      if (!map[ch]) {
        map[ch] = 1;
        subString = subString + ch;
      } else {
        if (subString.length > finalSub.length) {
          finalSub = subString;
        }
        subString = ch;
        map={}
        map[ch]=1;
      }
    }
    return finalSub.length> subString.length? finalSub: subString;
  };
  
  console.log(largestSubstring("pwwkew"));
  