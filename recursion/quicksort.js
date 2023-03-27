/**
 * implementation of quick sort algorith
 *
 **/

/**
 * @param{number[]}arr
 **/
const sort = (arr) => {
  quickSort(arr, 1, arr.length);
  console.log(`sorted arr`, arr);
};
const quickSort = (arr, left, right) => {
  if (left < right) {
    let q = partition(arr, left, right);
    quickSort(arr, left, q - 1);
    quickSort(arr, q + 1, right);
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
  return i;
};
sort([2, 4, 1, 3, 5, 8, 9, 6, 7]);
