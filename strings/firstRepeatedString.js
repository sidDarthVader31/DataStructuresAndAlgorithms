/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = {};
  let pos=-1;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (!map[`${ch}`]) {
      map[`${ch}`] = {index:i,value:1}
      pos = i;
    } else {
      map[`${ch}`].value = map[`${ch}`].value + 1;
      pos = -1;
    }
  }
  for(const key in map){
    if( map[key].value== 1){
        pos=map[key].index;
        break;
    }
  }
  return pos;
};
console.log(firstUniqChar("loveleetcode"));
