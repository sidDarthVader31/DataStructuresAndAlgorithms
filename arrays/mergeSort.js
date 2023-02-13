// /**
//  * Implementation of merge sort
//  */

const mergeSortArrays = (unsortedArray) => {
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  const middle = unsortedArray.length / 2;
  const leftArray = unsortedArray.splice(0, middle);
  return mergeArrays(
    mergeSortArrays(leftArray),
    mergeSortArrays(unsortedArray)
  );
};

const mergeArrays = (leftArray, rightArray) => {
  let output = [];
  let current = 0;
  let i = 0,
    j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      output[current] = leftArray[i];
      i++;
    } else {
      output[current] = rightArray[j];
      j++;
    }
    current++;
  }
  for (let k = i; k < leftArray.length; k++) {
    output[current] = leftArray[k];
    current++;
  }
  for (let l = j; l < rightArray.length; l++) {
    output[current] = rightArray[l];
    current++;
  }

  return [...output];
};
console.log(mergeSortArrays([12, 11, 13, 5, 6, 7]));

module.exports = { mergeArrays };
