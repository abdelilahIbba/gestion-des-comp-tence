function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let curentVal = arr[i];
      let J;
      for (j = i - 1; j >= 0 && arr[j] > curentVal; j--) {
        arr[j + 1];
      }
      arr[j + 1] = curentVal;
    }
    console.log(arr);
  }
  
  let arr = [2, 1, 3, 7, 5];
  insertionSort(arr);
  