/**
 * implementation of quick sort algorith
 *
 **/

/**
 * @param{number[]}arr
 **/
const quickSort = (arr) => {
  const pivot = arr.length - 1;
  const pivotValue = arr[pivot];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      let temp = arr[i];
      arr[i] = pivot;
      arr[pivot] = temp;
    }
  }
};
