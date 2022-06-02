function timeConversion(s) {
    if (s[8] === "A"){
        //case 01 (12hrs)
        if ((s[0] === "1") && (s[1] === "2")){
            return printTime(0, 0, s[3], s[4], s[6], s[7])
        }
        //case 02 (01 - 09hrs)
        // if ((s[0] === "0") && (Number(s[1]) < 10)){
        //     return printTime(0, s[1], s[3], s[4], s[6], s[7])
        // }
        //case 03 (11 and 10hrs)
        // if ((s[0] === "1") && (Number(s[1]) < 2)){
        //     return printTime(1, s[1], s[3], s[4], s[6], s[7])
        // }
        //make case 02 and 03 one
        if (((s[0] === "0") && (Number(s[1]) < 10)) || (s[0] === "1") && (Number(s[1]) < 2)) {
            return printTime(s[0], s[1], s[3], s[4], s[6], s[7])
        }
    } else {
        //case 4
        if ((s[0] === "0") && (Number(s[1]) < 8)){
            const h2 = Number(s[1]) + 2
            return printTime(1, h2, s[3], s[4], s[6], s[7])
        }
        //case 5 
        if ((s[0] === "0") && (Number(s[1]) > 7)){
            const h2 = (Number(s[1]) + 2) % 10
            return printTime(2, h2, s[3], s[4], s[6], s[7])
        }
        //case 6
        if ((s[0] === "1") && (Number(s[1]) < 2)){
            const h2 = (Number(s[1]) + 2) % 10
            return printTime(2, h2, s[3], s[4], s[6], s[7])
        }
        //case 7
        if ((s[0] === "1") && (s[1] === "2")){
            return printTime(1, 2, s[3], s[4], s[6], s[7])
        }
    }
}

function printTime(h1, h2, m1, m2, s1, s2){
    return `${h1}${h2}:${m1}${m2}:${s1}${s2}`
}

//case 01
console.log(timeConversion("12:05:45AM")) //00:05:45
//case 02
console.log(timeConversion("02:05:45AM")) //02:05:45
//case 03
console.log(timeConversion("11:05:45AM")) //11:05:45
//case 04
console.log(timeConversion("01:05:45PM")) //13:05:45
//case 05
console.log(timeConversion("08:05:45PM")) //20:05:45
//case 06
console.log(timeConversion("11:05:45PM")) //22:05:45
//case 07
console.log(timeConversion("12:05:45PM")) //12:05:45
