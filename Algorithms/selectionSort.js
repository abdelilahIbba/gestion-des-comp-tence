function selectSort(arr) {
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

let arr = [2, 1, 3, 7, 5, 4, 6, 8];

selectSort(arr);
