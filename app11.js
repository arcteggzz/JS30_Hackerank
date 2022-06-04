function extraLongFactorials(n) {
    if ((n === 0) || (n === 1)) {
        console.log(1)
    }
    let i = 2
    let factorial = 1
    while (i <= n) {
        factorial = factorial * i
        i++
    }
    console.log(BigInt(factorial)) 
}

(extraLongFactorials(25))
(extraLongFactorials(5))
(extraLongFactorials(6))
(extraLongFactorials(1))