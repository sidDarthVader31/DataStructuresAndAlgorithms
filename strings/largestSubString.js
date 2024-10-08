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
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (map[ch] == undefined || map[ch] == null) {
      map[ch] = i;
      count = count + 1;
    } else {
      maxCount = Math.max(count, maxCount);
      i = map[ch];
      map = {};
    }
  }
  return Math.max(maxCount, count);
};

/**
 * @param {string} s
 * @returns {number}
 **/
const optimizedLargestSubstring = (s) => {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if(s.length<1){
    return s.length;
  }

  for (let i = 0; i < s.length; i++) {
      while (set.has(s[i])) {
          set.delete(s[left])
          left++;
      }
      set.add(s[i]);
      maxSize = Math.max(maxSize, i - left + 1)
  }
};
console.log(optimizedLargestSubstring("tmmzuxt"));



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let left = 0;
    let maxLength = 0;
    for(let right = 0;right < s.length; right ++){
        let rightChar = s.charAt(right);
        if(map[rightChar]!= undefined){
            left = Math.max(left, map[rightChar] + 1);
        }
        map[rightChar] = right;
        maxLength = Math.max(maxLength, right-left + 1);
    }
    return maxLength;
};
