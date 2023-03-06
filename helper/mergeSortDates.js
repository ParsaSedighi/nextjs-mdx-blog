export default function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, midIndex);
  const rightArray = arr.slice(midIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (
      Date.parse(leftArray[0].data.date) < Date.parse(rightArray[0].data.date)
    ) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray];
}
