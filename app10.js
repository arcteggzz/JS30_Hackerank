function gradingStudents(grades) {
    const finalGrades = []
    grades.forEach(grade => {
        //case 01
        if (grade < 38) {
            finalGrades.push(grade)
            return
        }
        //case 02
        const checkVar2  = grade + 2
        if (checkVar2 % 5 === 0) {
            finalGrades.push(checkVar2)
            return
        }
        //case 03
        const checkVar1  = grade + 1
        if (checkVar1 % 5 === 0) {
            finalGrades.push(checkVar1)
            return
        }
        //case 04
        finalGrades.push(grade)
    });
    return finalGrades
}

console.log(gradingStudents([73, 67, 38, 33]))