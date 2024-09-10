function binarySearch(sortedArray, value) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === value) {
      return mid;
    } else if (sortedArray[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 5, 7, 9, 11];
const index = binarySearch(arr, 7);

if (index !== -1) {
  console.log(`Target found at index ${index}`);
} else {
  console.log("Target not found");
}
