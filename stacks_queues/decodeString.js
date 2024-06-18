/**
 *Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 *
 * link: https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let output = '';
    let stack = [];
    let count = 0
  for (const char of s) {
        //char = s.charAt(i);
        if( char == '['){
            stack.push(output)
            stack.push(count)
            output = '';
            count = 0;
        }
        else if ( char == ']'){
            const repetition = stack.pop();
           // console.log(`reletition:`, repetition)
            let toRepeat = stack.pop();
           // console.log(`to repeat:`, toRepeat)
            output= toRepeat + output.repeat(repetition)
           // console.log(`output now:`, output)
        }
        else if ( char >='0' && char <='9'){
            count = count*10 + parseInt(char);
        }
        else{
            output = output+ char
        }
    }
    return output

};

