var diagonalDifference = function (arr) {
    var rightDiagonalArray = [];
    arr.forEach(function (arrayElem) {
        var correctRightIndex = arr.indexOf(arrayElem);
        rightDiagonalArray.push(arrayElem[correctRightIndex]);
    });
    var sumRightDiagonalArray = rightDiagonalArray.reduce(function (sum, current) { return sum + current; });
    var leftDiagonalArray = [];
    arr.forEach(function (arrayElem) {
        var correctLeftIndex = arr.length - (arr.indexOf(arrayElem) + 1);
        leftDiagonalArray.push(arrayElem[correctLeftIndex]);
    });
    var sumLeftDiagonalArray = leftDiagonalArray.reduce(function (sum, current) { return sum + current; });
    return sumLeftDiagonalArray > sumRightDiagonalArray
        ? sumLeftDiagonalArray - sumRightDiagonalArray
        : sumRightDiagonalArray - sumLeftDiagonalArray;
};
var test1 = [
    [11, 4, 6, 2],
    [9, 3, 8, 5],
    [5, 8, 4, 11],
    [1, 6, 14, -3],
];
var test2 = [
    [11, 4, 3],
    [9, 3, 8],
    [5, 8, 12],
];
console.log(diagonalDifference(test1));
console.log(diagonalDifference(test2));
