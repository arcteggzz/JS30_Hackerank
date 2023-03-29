const diagonalDifference = (arr: number[][]) => {
  const rightDiagonalArray: number[] = [];

  arr.forEach((arrayElem: number[]) => {
    const correctRightIndex: number = arr.indexOf(arrayElem);
    rightDiagonalArray.push(arrayElem[correctRightIndex]);
  });

  const sumRightDiagonalArray: number = rightDiagonalArray.reduce(
    (sum, current) => sum + current
  );

  const leftDiagonalArray: number[] = [];
  arr.forEach((arrayElem: number[]) => {
    const correctLeftIndex: number = arr.length - (arr.indexOf(arrayElem) + 1);
    leftDiagonalArray.push(arrayElem[correctLeftIndex]);
  });
  const sumLeftDiagonalArray: number = leftDiagonalArray.reduce(
    (sum, current) => sum + current
  );

  return sumLeftDiagonalArray > sumRightDiagonalArray
    ? sumLeftDiagonalArray - sumRightDiagonalArray
    : sumRightDiagonalArray - sumLeftDiagonalArray;
};

const test1: number[][] = [
  [11, 4, 6, 2],
  [9, 3, 8, 5],
  [5, 8, 4, 11],
  [1, 6, 14, -3],
];

const test2: number[][] = [
  [11, 4, 3],
  [9, 3, 8],
  [5, 8, 12],
];

console.log(diagonalDifference(test1));
console.log(diagonalDifference(test2));
