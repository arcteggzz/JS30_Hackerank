function staircase(n) {
    for (let i=1; i<=n; i++){
        const iterationArray = genArray(n-i, i)
        print(iterationArray.join(""))
    }
}

const genArray = (empty, hash)=>{
    const finalArray = []
    for (let i=0; i<empty; i++){
        finalArray.push(' ')
    }
    for (let i=0; i<hash; i++){
        finalArray.push('#')
    }
    return finalArray
}

const print = (text) => {
    console.log(text)
}

const test1 = 6
const test2 = 9

staircase(test1)
staircase(test2)





// const addSpace = () => {
//     return " "
// }

// const addHash = () => {
//     return "#"
// }

// const genWord = (index, length) => {
//     let finalWord = ""
//     for (let i=0; i<length; i++){
//         finalWord = 
//     }
//     const empty = addSpace()
//     const hash = addHash()

//     // return empty + empty + hash
//     return `${empty}${hash}`
// }

// const word = genWord(0, 6)
// console.log(word)


