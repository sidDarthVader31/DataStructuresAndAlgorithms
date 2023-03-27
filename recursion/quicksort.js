/**
 * implementation of quick sort algorith
 *
 **/

/**
 * @param{number[]}arr
 **/
const sort = (arr) => {
  return quickSort(arr, 1, arr.length);
};
const quickSort = (arr, left, right) => {
  if (left < right) {
    let q = partition(arr, left, right);
    quickSort(arr, left, q);
    quickSort(arr, q + 1, right);
  } else {
    return arr;
  }
};
const partition = (arr, left, right) => {
  let x = arr[right - 1];
  let i = left - 1;

  for (let j = left - 1; j < right; j++) {
    if (arr[j] <= x) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i = i + 1;
    }
  }
  console.log(`array`, arr);
  return i - 1;
};

console.log(`sortL`, sort([5, 3, 1, 4, 6, 2]));
