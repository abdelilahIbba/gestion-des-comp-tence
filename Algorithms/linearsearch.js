function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [9, 2, 3, 6, 5];
const res = linearSearch(arr, 5);

if (res !== -1) {
  console.log(`Element found at index: ${res}`);
} else {
  console.log("Element not found");
}
