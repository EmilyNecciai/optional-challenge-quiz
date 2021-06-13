// QUESTIONS ARRAY
var questions = [
    {question: "Slippy is a type of shoe.", answer: "false"},
    {question: "A Gob is a cookie.", answer: "true"},
    {question: "The Steel Curtain is a football term.", answer: "true"},
    {question: "A folding chair in a street parking space means someone plans to sweep that side of the street later.", answer: "false"},
    {question: "Yinz means 'you all'.", answer: "true"}
];

// GET NEEDED ELEMENTS FOR MANIPULATION
var questionEl = document.getElementById("question");
var scoreEl = document.getElementById("score");
var answerBtn = document.getElementsByTagName("BUTTON").value;
console.log(answerBtn)


// START AND SHOW QUIZ SCORE AT 0
var quizScore = 0;
scoreEl.innerText = quizScore;

var answer;
switch(answerBtn) {
    case "true":
        console.log("True");
    case "false":
        console.log("False");
    default: 
        console.log("How did you get this?")
}


// function submitAns() {
//     var answer = answerBtn.addEventListener("click", submitAns).value;
//     console.log(answer);
// }


// //TRUES
// var trueBtn = document.getElementById("true-btn");
// trueBtn.addEventListener("click", submitTrue);

// function submitTrue() {
//     console.log("true");
//     return true;
// }

// //FALSES
// var falseBtn = document.getElementById("false-btn");
// falseBtn.addEventListener("click", submitFalse);

// function submitFalse() {
//     console.log("false");
//     return false;
// }

// var answer = document.addEventListener("click", function(){
//     if (condition) {
        
//     } else {
        
//     }
//   });
  

// for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and pull in answer
//     questionEl.innerText = questions[i].question;
//     var answer = 
//     // var answer = ;
//     // console.log(answer);
  
//     // Compare answers
//     if (
//       (answer === true && questions[i].answer === "true") ||
//       (answer === false && questions[i].answer === "false")
//     ) {
//       // Increase score
//       quizScore++;
//       // Alert the user
//     //   alert('Correct!');
//     } else {
//     //   alert('Wrong!');
//     }
//   }
  

// var displayQuestion = function() {
    
// } 




      
// timer - GOOD
var timerEl = document.getElementById("timer");

var countdown = function() {
    var timeLeft = 1000;
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + "s";
            timeLeft--;
        } else {
            timerEl.textContent = "Out of time!";
            clearInterval(timeInterval);
            alert("Time's Up! Sorry - refresh the page to try again.");
            quizScore = 0;
        }
    }, 1000);
}

countdown();


