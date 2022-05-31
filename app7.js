function miniMaxSum(arr) {
    //sort the array first before passing it into these functions
    arr.sort((a, b) => a - b);
    
    const maxSum = findMaxSum(arr)
    const minSum = findMinSum(arr)
    print(minSum, maxSum)
}

const print = (text1, text2) => {
    console.log(`${text1} ${text2}`)
}

const findMaxSum = (arr) => {
    //remove the first number from the array
    const maxArray = arr.slice(1)
    //sum the array and return the sum
    const totalMax = sumArray(maxArray)
    return totalMax
}

const findMinSum = (arr) => {
    //remove the last number from the array
    const minArray = arr.slice(0, -1)
    //sum the array and return the sum
    const totalMin = sumArray(minArray)
    return totalMin
}

const sumArray = (arr) => {
    let total = arr.reduce (
        ( previousValue, currentValue ) => previousValue + currentValue,
        0
    )
    return total
}

miniMaxSum([1, 2, 3, 4, 5])