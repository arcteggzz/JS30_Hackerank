function gradingStudents(grades) {
    grades.forEach(grade => {
        //case 01
        if (grade < 38) {
            console.log(grade)
            return
        }
        //case 02
        const checkVar2  = grade + 2
        if (checkVar2 % 5 === 0) {
            console.log(checkVar2)
            return
        }
        //case 03
        const checkVar1  = grade + 1
        if (checkVar1 % 5 === 0) {
            console.log(checkVar1)
            return
        }
        //case 04
        console.log(grade)
        return
    });
}

gradingStudents([73, 67, 38, 33])