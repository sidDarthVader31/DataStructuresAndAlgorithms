/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0;
  let index = digits.length - 1;
  console.log(`index`, index);
  while (carry > 0 || index >= 0) {
    let sum = digits[index] + 1;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
      index--;
      digits[index] = sum;
    } else {
      digits[index] = sum;
      break;
    }
  }
  return digits;
};
