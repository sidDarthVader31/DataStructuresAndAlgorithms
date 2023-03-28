/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let index = 0;
  let sum = 10;
  const reverseDigits = digits.reverse();
  while (carry > 0) {
    let sum = (reverseDigits[index] || 0) + 1;
    if (sum > 9) {
      sum = sum % 10;
      reverseDigits[index] = sum;
      carry = 1;
      index++;
    } else {
      reverseDigits[index] = sum;
      break;
    }
  }

  return reverseDigits.reverse();
};
