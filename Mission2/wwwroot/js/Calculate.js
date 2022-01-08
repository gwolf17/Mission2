//Declare variables
var grade;
var letterGrade;

//Function that calculates final grade % and final letter grade when the button on the index page is clicked
$("#btn").click(function () {
    //Add up inputs to get total % grade
    grade = parseInt($("#assignments").val()) + parseInt($("#groupProject").val())
        + parseInt($("#quizzes").val()) + parseInt($("#exams").val()) + parseInt($("#intex").val())
    //Determine letter grade
    if (grade >= 94) {
        letterGrade = 'A'
    } else if (grade >= 90) {
        letterGrade = 'A-'
    } else if (grade >= 87) {
        letterGrade = 'B+'
    } else if (grade >= 84) {
        letterGrade = 'B'
    } else if (grade >= 80) {
        letterGrade = 'B-'
    } else if (grade >= 77) {
        letterGrade = 'C+'
    } else if (grade >= 74) {
        letterGrade = 'C'
    } else if (grade >= 70) {
        letterGrade = 'C-'
    } else if (grade >= 67) {
        letterGrade = 'D+'
    } else if (grade >= 64) {
        letterGrade = 'D'
    } else if (grade >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    }
    //Output results
    alert("Grade Percentage: " + grade + "%\n" + "Letter Grade: " + letterGrade)
})