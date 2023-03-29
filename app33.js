function findSecondBiggestAndSmallest(arr) {
  if (arr.length < 2) return "Array must have 2 elements";
  if (arr.length === 2) {
    const secondHighest = arr[1];
    const secondLowest = arr[0];
    return `${secondHighest} ${secondLowest}`;
  }
  if (arr.length > 2) {
    let secondHighest;
    let secondLowest;
    let i = 1;
    while (i < arr.length) {
      if (arr[i] > arr[0]) {
        secondLowest = arr[i];
        break;
      }
      i++;
    }
    let j = arr.length - 2;
    while (j > 0) {
      if (arr[j] < arr[arr.length - 1]) {
        secondHighest = arr[j];
        break;
      }
      j--;
    }
    return `${secondHighest} ${secondLowest}`;
  }
}

console.log(findSecondBiggestAndSmallest([2, 45, 67, 89, 92, 99]));
console.log(findSecondBiggestAndSmallest([2, 45]));
