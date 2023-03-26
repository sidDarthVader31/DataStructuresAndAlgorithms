/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let map = {};
  let isAnagramFlag = true;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }
  let tmap = {};
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    if (!tmap[char]) {
      tmap[char] = 1;
    } else {
      tmap[char] = tmap[char] + 1;
    }
  }

  for (const key of Object.keys(map)) {
    if (!tmap[key]) {
      isAnagramFlag = false;
      break;
    } else if (tmap[key] && tmap[key] != map[key]) {
      isAnagramFlag = false;
      break;
    }
  }
  return isAnagramFlag;
};
console.log(isAnagram("rat", "car"));
