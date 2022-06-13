function activityNotifications(expenditure, d) {
    //step 1
    let count = 0
    //loop over the expenditure array starting from the possible trailing days
    for (let i=d; i<=expenditure.length; i++){
        //step 2
        //save the current day's expense in a variable
        const currentExpense = expenditure[i]
        //step 3
        //get the trailing day's expenses and sort it in ascending/descending order. any works
        const trailingExpenses = expenditure.slice(i-d ,i)
        // trailingExpenses.sort(function(a, b){return a-b})
        const trailingExpensesSorted = countingSort(trailingExpenses)
        //step 4
        //find the median of the array
        const median = medianFinder(trailingExpensesSorted ,  d)
        //step 5
        //compare the today's expense to 2xmedian
        if (currentExpense >= (2 * median)) count ++
    }
    return count
}

const medianFinder = (array, length) => {
    if (length % 2 !== 0) {
        const position = Math.trunc(length/2)
        return array[position]
    }
    else {
        const position = length/2
        return ((array[position] + array[position - 1]) / 2)
    }
}

function countingSort(arr){
    return arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
            .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] ); 
}



const expenditures = [2, 3, 4, 2, 3, 6, 8, 4, 5]
const expenditures1 = [1,2,3,4,4]
const expenditures2 = [10,20,30,40,50]

console.log(activityNotifications(expenditures, 5))
console.log(activityNotifications(expenditures1, 4))
console.log(activityNotifications(expenditures2, 3))

