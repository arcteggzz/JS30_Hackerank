//algorithm 01
// function climbingLeaderboard(ranked, player) {
//     // ranked  is an array of existing scores always in descending order
//     // player is an array of scores by the player after every game played
//     player.map((score) => {
//         //step 01
//         //add the score to the correct position of ranked and return the updated array
//         //having issues figuring out the step. I know how to do it if it is in ascending order, got it off of the internet.
//         //this ascending order insert function is defined below insert(array,elementToInsert)
//         //https://stackoverflow.com/questions/1344500/efficient-way-to-insert-a-number-into-a-sorted-array-of-numbers
//         //step 02
//         //return the correct position of the score
//         const scoreRank = positionFinder(ranked, score)
//         //step 03
//         //print it to the console
//         print(scoreRank)
//     })
// }

//algorithm 02
function climbingLeaderboard(ranked, player) {
    const playerRanks = []
    //step 01
    //reverse the array
    ranked.reverse()
    //step 02
    //map over the player array
    player.map((score) => {
        //step 03
        //add the score to the correct position of ranked and return the updated array
        insert(score, ranked)
        //step 04
        //reverse the array back
        ranked.reverse()
        //step 05
        //return the correct position of the score
        const scoreRank = positionFinder(ranked, score)
        ranked.reverse()
        //step 06
        //print it to the console
        playerRanks.push(scoreRank)
    })
    return playerRanks
}

const positionFinder = (array, score) => {
    let scoreRank = 1
    let i = 0
    while( i < array.length){
        if (array[i] === score) return scoreRank
        if ((i === 0) && (array[i] === score)) return 1
        if ((array[i] !== score) && (array[i] !== array[i-1])) scoreRank++
        i++
    }
}

const print = (text) => {
    console.log(text)
}

function insert(element, array) {
    if (element <= array[0]) {
        array.unshift(element)
        return array;
    }
    else {
        array.splice(locationOf(element, array) + 1, 0, element);
        return array;
    }
}

function locationOf(element, array, start, end) {
    start = start || 0;
    end = end || array.length;
    var pivot = parseInt(start + (end - start) / 2, 10);
    if (end-start <= 1 || array[pivot] === element) return pivot;
    if (array[pivot] < element) {
        return locationOf(element, array, pivot, end);
    } else {
        return locationOf(element, array, start, pivot);
    }
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]))


    
