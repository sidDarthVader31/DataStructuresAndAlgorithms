/**Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const remove = new Set();

  // Mark invalid parentheses for removal
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === "(") {
      stack.push(i);
    } else if (c === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        remove.add(i);
      }
    }
  }

  // Mark any remaining opening parentheses for removal
  for (let i of stack) {
    remove.add(i);
  }

  // Build the resulting string
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!remove.has(i)) {
      result += s.charAt(i);
    }
  }

  return result;
};
