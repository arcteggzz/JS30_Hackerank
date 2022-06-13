
function gridSearch(G, P) {
    //step 1
    //loop through the grid array and if you don't run into P[0][0] in the "area of possibility" return "NO"
    //P[0][0] is the first character of the first string.
    //the area of possibility is only area where if we don't see the trigger character(p[0][0]), then it is impossible to find the entire P inside
    const trigger = P[0][0] //the first character of the first string
    const possibilityRow = G.length - P.length //the possible rows where our search string array can occur
    const possibilityColumn = G[0].length - P[0].length //the possible columns where our search string array can occur
    //now we loop through only the rows that it is possible to find our search strings
    for (let s=0; s<=possibilityRow; s++){
        //for each string that we receive, we pass it into the finder function as well as the index of the string we passed in the grid column
        //if the finder function finds a match, it returns true
        let returnValue = finder(G[s], possibilityColumn, trigger, s)
        if (returnValue) return "YES"
    }
    //if we finish the loop and never received a true from the finder, return No. meaning the string doesn't exist.
    return "NO"
}

//this finder function takes 4 parameters
//it checks if the trigger value and the trigger string is in the string that it receives
//we only check the characters within the possibility column to save computer resources
//we only also generate the trigger string if the triggers are the same. this saves a lot of computer resources
//if we do find both the trigger character and the trigger string, we immediately check if that position of the trigger has the next set of correct strings in the search array
//it returns true if it finds the search string text array inside the grid array
function finder(_rowString, _possibilityColumn, _trigger, _s){
    let i = 0
    while (i<=_possibilityColumn){
        if ((_rowString[i] === _trigger) && (_rowString.substring(i, P[0].length + i) === P[0])){
            let status = checker(_s, i)
            console.log(`I ran checker and got ${status}`)
            if (status) return true
        }
        i++
    }
    return false
}

function checker(__s, __i){
    for (let count = 1; count<P.length; count++){
        let subString = G[__s + count].substring(__i, P[0].length + __i)
        if (subString !== P[count]){
            return false
        }
    }
    return true
}

const G = [
    "7289505864",
    "6733845505",
    "8953531643",
    "3895059324",
    "2929505813",
    "5633845374",
    "6473530293",
    "7053106601",
    "0834282956",
    "4607924137"
]

const P = [
    "9505",
    "3845",
    "3530"
]

// const G = [
//     "400453592126560",
//     "114213133098692",
//     "474386082879648",
//     "522356951189169",
//     "887109450487496",
//     "252802633388782",
//     "502771484966748",
//     "075975207693780",
//     "511799789562806",
//     "404007454272504",
//     "549043809916080",
//     "962410809534811",
//     "445893523733475",
//     "768705303214174",
//     "650629270887160"
// ]

// const P = [
//     "99",
//     "99"
// ]

// console.log(checker(4,3))
// gridSearch(G, P)
console.log(gridSearch(G, P))