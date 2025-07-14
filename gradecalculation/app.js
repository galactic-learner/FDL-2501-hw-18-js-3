
// This program calculates the grade based on the score.

let stdName = prompt("Enter your name: ");
let result = Number(prompt("Enter the score: "));
 
// print name
let name = document.querySelector('.name');
name.innerHTML = stdName;

// prepare rslt
let rslt = document.querySelector('.rslt');

function calculateGrade(result){
    // print grade to rslt
    if(result>=80 && result <= 100){
        rslt.innerHTML = "A+";
    } else if(result >= 70 && result < 80){
        rslt.innerHTML = "A";
    } else if(result >= 60 && result < 70){
        rslt.innerHTML = "A-";
    } else if(result >= 0 && result < 59){
        rslt.innerHTML = "Try again.";
    } else {
        rslt.innerHTML = "Invalid score.";
    }
}

calculateGrade(result);

