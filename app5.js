function plusMinus(arr) {
    let positiveNum = 0
    let negativeNum = 0
    let zeroNum = 0
    arr.forEach(item => {
        if (item === 0) zeroNum++
        if (item > 0) positiveNum++
        if (item < 0) negativeNum++
    })
    print((positiveNum/arr.length).toFixed(6))
    print((negativeNum/arr.length).toFixed(6))
    print((zeroNum/arr.length).toFixed(6))
}

const print = (text) => {
    console.log(text)
}

plusMinus([1,1,0,-1,-1])