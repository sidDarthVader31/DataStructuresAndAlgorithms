/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
**/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let pos = 0;
  let removedString = "";
  //remove non alphanumeric characters
  for (let i = 0; i <= s.length - 1; i++) {
    let code = s.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      removedString = removedString + s.substring(pos, i);
      pos = i + 1;
    }
  }
  removedString = removedString + s.substring(pos, s.length);
  let right = removedString.length - 1;
  removedString = removedString.toLowerCase();
  while (left <= right) {
    if (removedString.charAt(left) != removedString.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome("race a car"));
