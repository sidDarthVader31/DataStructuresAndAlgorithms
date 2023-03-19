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
  if (s.length <= 1) {
    return false;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (ch == "(" || ch == "{" || ch == "[") {
      stack.push(ch);
    } else if (ch == ")" && stack[stack.length - 1] == "(") {
      stack.pop();
    } else if (ch == "}" && stack[stack.length - 1] == "{") {
      stack.pop();
    } else if (ch == "]" && stack[stack.length - 1] == "[") {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length == 0;
};
