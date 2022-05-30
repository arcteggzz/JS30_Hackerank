function diagonalDifference(arr) {
    const rightDiagonalArray = []
    arr.forEach((arrayElem) => {
        const correctRightIndex = arr.indexOf(arrayElem)
        rightDiagonalArray.push(arrayElem[correctRightIndex])
    })
    const sumRightDiagonalArray = rightDiagonalArray.reduce((sum, current) => sum + current)
    const leftDiagonalArray = []
    arr.forEach(arrayElem =>{
        const correctLeftIndex = arr.length - (arr.indexOf(arrayElem) + 1)
        leftDiagonalArray.push(arrayElem[correctLeftIndex])
    })
    const sumLeftDiagonalArray = leftDiagonalArray.reduce((sum, current) => sum + current)
    if (sumLeftDiagonalArray > sumRightDiagonalArray){
        return sumLeftDiagonalArray - sumRightDiagonalArray
    } else {
        return sumRightDiagonalArray - sumLeftDiagonalArray
    }
}

const test1 = [
    [11, 4, 6, 2],
    [9, 3, 8, 5],
    [5, 8, 4, 11],
    [1, 6, 14, -3],
]

const test2 = [
    [11, 4, 3],
    [9, 3, 8],
    [5, 8, 12],
]

console.log(diagonalDifference(test1))
console.log(diagonalDifference(test2))

