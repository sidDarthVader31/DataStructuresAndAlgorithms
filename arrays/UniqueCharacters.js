/**
 * Implement an algorithm to determine if a string has all unique characters
 */

const solution = (s) => {
  let hashMap = {};
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    if (hashMap[`${s.charAt(i)}`]) {
      flag = true;
      break;
    } else {
      hashMap[`${s.charAt(i)}`] = true;
    }
  }
  return flag;
};
console.log(solution("sidhart"));
