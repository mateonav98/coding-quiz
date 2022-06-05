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

var questionsBank= [
    {
        question: "What does HTML stand for",
        choices: [ "Hit the MotherLoad", "Hypertext Markup Language", "Hello To My Love", "Hamburger, Tomato, Lettuce, Mayo"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What year was javascript?",
        choices: ["1998", "1994", "1995", "1990"],
        answer:  "1995"
    },
    {
        question: "_______ is the process of finding errors and fixing them within a program",
        choices: ["Debugging", "Bugs", "Scanning", "Fixing"],
        answer: "Debugging"
    },
    {
        question: "What is CSS short for",
        choices: ["Content Style System", "Cross Site Scripting","Customer Support Service", "Cascading Style Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "Which is a boolean value",
        choices: ["True and False", "for and if", "Object or Array", "String or Value"],
        answer: "True and False"
    },
]


var questionContainerElement = document.getElementById("questionContainer")
startButton.addEventListener('click', startQuiz)
let randomizeQuestions, currentQuestion
var questionElement = document.getElementById('question')
var answerButtons = document.getElementById('answerButtons')
var answer = document.getElementById('answer')
var timerEl = document.getElementById("time");

var currentIndex = 0;
var timerId;
var startTime = 60;
var penaltyTime = 10;
var score = 0;
var questionNumber = 0

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


function startQuiz() {
    console.log('Started')
    startButton.classList.add('hidden')
    randomizeQuestions = questionsBank.sort(() => Math.random() - .5)
    currentQuestion=0
    questionContainerElement.classList.remove('hidden')
    nextQuestion();
}


function nextQuestion() {
    showQuestion(randomizeQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question

    }



