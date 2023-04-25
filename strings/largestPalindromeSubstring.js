/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) {
    return s;
  }
  let left = 0;
  let right = s.length - 1;
  let counter = 0;
  let largestPalindrome = "";
  let palindrome = "";
  let palReverse = "";
  let rightInitial = right;
  while (counter < s.length) {
    if (left == right) {
      palindrome = palindrome + s.charAt(left) + palReverse;
      if (palindrome.length > largestPalindrome.length) {
        largestPalindrome = palindrome;
      }
      palindrome = "";
      palReverse = "";
      right = s.length - 1;
      rightInitial = right;
      counter = counter + 1;
      left = counter;
    } else if (s.charAt(left) == s.charAt(right) && right - left == 1) {
      palindrome = palindrome + s.charAt(left) + s.charAt(right) + palReverse;
      if (palindrome.length > largestPalindrome.length) {
        largestPalindrome = palindrome;
      }
      palindrome = "";
      palReverse = "";
      right = s.length - 1;
      rightInitial = right;
      counter = counter + 1;
      left = counter;
    } else if (s.charAt(left) == s.charAt(right)) {
      palindrome = palindrome + s.charAt(left);
      palReverse = s.charAt(left) + palReverse;
      left++;
      right--;
    } else if (palindrome.length > 0) {
      palindrome = "";
      palReverse = "";
      right = rightInitial - 1;
      rightInitial--;
      left = counter;
    } else {
      right--;
    }
  }
  return largestPalindrome;
};
