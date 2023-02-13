/**
 * Given an integer array num return an array answer such that answer[i] is equal to the product of all the elements if nums except nums[i]
 *
 */

// O(n) complexity
const processWithDivision = (array) => {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  let answer = [];
  console.log(`sum:${sum}`);
  for (let i = 0; i < array.length; i++) {
    answer[i] = sum / array[i];
  }
  return answer;
};

console.log(processWithDivision([1, 2, 3, 4]));

/**
 * brute force
 * O(n2) complexity
 * @param {} array
 * @returns
 */
const processWithoutDivision = (array) => {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 1;
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        sum = sum * array[j];
      }
    }
    ans.push(sum);
  }
  return ans;
};

/**
 * optmized O(n)
 * @param {*} array
 */
const processWithoutDivisionOptimized = (array) => {
  let leftArray = [];
  let rightArray = [];
  let ans = [];
  leftArray.push(1);
  let size = array.length;

  //1,2,3,4 -> 1,1,2,6
  for (let i = 1; i < array.length; i++) {
    leftArray.push(array[i - 1] * leftArray[i - 1]);
  }
  // rightArray[array.length - 1] = 1;
  //   for (let i = array.length - 2; i >= 0; i--) {
  //     rightArray[i] = rightArray[i + 1] * array[i + 1];
  //   }

  rightArray.push(1);
  for (let i = array.length - 2; i >= 0; i--) {
    rightArray.push(rightArray[size - i - 2] * array[i + 1]);
  }
  for (let i = 0; i < array.length; i++) {
    ans.push(leftArray[i] * rightArray[size - i - 1]);
  }
  return ans;
};

console.log(`optimized`, processWithoutDivisionOptimized([-1,1,0,-3,3]));
