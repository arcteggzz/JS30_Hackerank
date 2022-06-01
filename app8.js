// function birthdayCakeCandles(candles) {
//     let largest = candles[0]
//     let numLargest = 0

//     candles.forEach(element => {
//         if (element > largest) {
//             largest = element
//             numLargest = 1
//         }
//         if ( element === largest) {
//             numLargest ++
//         }
//     });
//     return numLargest
// }
//I'm not sure of the use cases that prevented the code above from passing.
//But I tried the one below and it passed all the test cases.

function birthdayCakeCandles(candles) {
    candles.sort((a, b) => b - a);
    let count = 0
    for (let i=0; (i < candles.length && candles[0] == candles[i]); i++){
        count++
    }
    return count
}

console.log(birthdayCakeCandles([3,3,1,3, 2, 6, 6, 6, 6 ,0]))
