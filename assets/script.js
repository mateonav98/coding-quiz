// Specifications: 
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// need: 
// start button 
// add event listener
// 

// what do we do?
// 1. offer user with a question and multuple choice answers when they press start
// 2. capture user input based their answers
// 3. increment/decrement score with each user input
// 4. decrease time any wrong answer selected
// 5. Game over once all questions have been answered or time elapses
// 6. save user score



var questionContainerElement = document.getElementById("questionContainer");

let randomizeQuestions, currentQuestion;
var questionElement = document.getElementById('question');
var answerButtons = document.getElementById('answerButtons');
var answer = document.getElementById('answer');



    
const startButton = document.getElementById('startButton');
var currentIndex = 0;
var timerId;
var time = 60;
var timerEl = document.getElementById("time");

function start() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    console.log(timerId)
}

startButton.onclick = start()

function clockTick() {
    time--;
    timerEl.textContent = time;
}


// function  startQuiz() {
//     startButton.classList.add('hidden')
//     randomizeQuestions = questionsBank.sort(() => Math.random() - .5)
//     currentQuestion=0
//     questionContainerElement.classList.remove('hidden')
//     Question();
// }


// function Question() {
//     showQuestion(randomizeQuestions[currentQuestion])
// }

// function showQuestion(question) {
//     questionElement.innerText = question.question
    
// }





// if (time > 0 ) {
//     // Set the `textContent` of `timerEl` to show the remaining seconds
//     timeEL.textContent = time + ' seconds remaining';
//     // Decrement time by 1
//     time--
//     console.log(time);
  
//   }
// }, 500);
// }



// var questionsBank= [
//     {
//         question: "Which country invented ice cream?",
//         answer: [
//             {text: "China", correct: true},
//             {test: "Russia", correct: false}
//         ],
//         question: "What is the body's largest organ?",
//         answer: [
//             {text: "Skin", correct: true},
//             {text: "Brain", correct: true}
//         ]
//     }
// ]