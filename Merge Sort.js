function mergeSort(array) {
  if (array.length === 0) return array;
  if (array.length === 1) return array;

  const mid = array.length / 2;
  const leftSide = array.slice(0, mid);
  const rightSide = array.slice(mid);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftArray.length > leftIndex && rightArray.length > rightIndex) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }
  if (leftArray[leftIndex] === undefined) {
    return (result = result.concat(rightArray.slice(rightIndex)));
  }
  if (rightArray[rightIndex] === undefined) {
    return (result = result.concat(leftArray.slice(leftIndex)));
  }
}
