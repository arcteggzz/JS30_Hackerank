// function countingValleys(steps, path) {
//     // loop over path and create an array
//     const arrayPath = Array.from(path)
//     console.log(typeof(arrayPath))
    
//     // in the path array, anytime we encounter a U, we do a check
//     // we check if the number of U === number of D
//     // if it's equal, we increment a count and
//     const numArray = convertToNum()

// }   

function countingValleys(steps, path) {
    // loop over path and create an array
    const arrayPath = Array.from(path)
    //convert all Us to +1 and all Ds to -1
    const numArray = convertToNum(arrayPath)
    console.log(numArray)
    //loop over the new array and anytime I hit a U, 
    //check if the sum of the numbers is 0
    //if it is 0 increment my count by 1
    let count = 0
    let i = 0
    while (i<numArray.length){
        //check if element is 1
        if (numArray[i] === 1){
            //create a new array that contains all elements up to this element
            const helpNumArray = numArray.slice(0, i+1)
            //get the sum of all elements in this new array
            let sumHelpNumArray = helpNumArray.reduce(
                ( previousValue, currentValue ) => previousValue + currentValue,
                0
            )
            if (sumHelpNumArray === 0) count ++
            //if sum = 0 and current element is 1, increment count by 1
        }
        i++
    }
    return count
}   

const convertToNum = (arr)=> {
    const numArray = []
    let i = 0
    while (i < arr.length) {
        if (arr[i] === 'U'){
            numArray.push(1)
        } 
        if (arr[i] === 'D'){
            numArray.push(-1)
        }
        i++
    }
    return numArray
}


console.log(countingValleys(8, "UDDDUDUU"))
console.log(countingValleys(12, "DDUUDDUDUUUD"))
