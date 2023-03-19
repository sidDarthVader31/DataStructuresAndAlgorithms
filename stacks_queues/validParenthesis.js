/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let roundBracketOpen = 0;
  let roundBracketClose = 0;
  let curlyBracketOpen = 0;
  let curlyBracketClose = 0;
  let ankleBracketOpen = 0;
  let ankleBracketClose = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (s == "(") {
      roundBracketOpen++;
    } else if (s == "{") {
      curlyBracketOpen++;
    } else if (s == "[") {
      ankleBracketOpen++;
    } else if (s == ")") {
      roundBracketClose++;
    } else if (s == "}") {
      curlyBracketClose++;
    } else if (s == "]") {
      ankleBracketClose++;
    } else {
      return "wrong input";
    }
  }
  return (
    roundBracketOpen == roundBracketClose &&
    curlyBracketOpen == curlyBracketClose &&
    ankleBracketOpen == ankleBracketClose
  );
};
