function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let sp = arr[i];
        arr[i] = arr[j];
        arr[j] = sp;
      }
    }
  }
  console.log(arr);
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547];

bubbleSort(arr);
