/*HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
Examples

 grade = 84 round to 85 (85 - 84 is less than 3)
 grade = 29 do not round (result is less than 40)
 grade = 57 do not round (60 - 57 is 3 or higher)
 */

function gradingStudents(grades) {
  return grades.map(value => {
    let multi_5
    if (value >= 38) {
      multi_5 = (Math.ceil(value / 5) * 5)
      if (multi_5 - value < 3)
        return multi_5
      else return value 
    } else {
      return value
    }
  })
}

grades = [38,40,47,84]
const result = gradingStudents(grades);
console.log(result)