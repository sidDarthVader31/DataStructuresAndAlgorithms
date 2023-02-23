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
  const length = s.length;
  if (length == 1) {
    return length;
  }
  let map = {};
  let maxLength = 0;
  let currentLength = 0;
  let right = 0;
  let left = 0;
  while (right < length && left < length) {
    //while left end is less than the length of the string
    let ch = s.charAt(right);
    console.log(`left :${left},rightL:${right}, ch = ${ch}, map = `, map);
    console.log(`current length:${currentLength}, maxLength:${maxLength}`);
    if (map[ch] >= left) {
      console.log(`inside if for ${right}`);
      left = map[ch] + 1;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      console.log(`inside else for `);
      map[ch] = right;
      currentLength = right - left + 1;
      //maxLength = Math.max(maxLength, currentLength);
      right++;
    }
  }
  console.log(`left:${left}, right:${right}`);
  console.log(`max leength:${maxLength}`);
  console.log(`current length:${currentLength}`);
  return Math.max(maxLength, currentLength);
};
console.log(optimizedLargestSubstring("abcabcbb"));
