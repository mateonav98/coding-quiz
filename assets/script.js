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



var startButton = document.getElementById("startButton");
var questionContainerElement = document.getElementById("questionContainer")
startButton.addEventListener('click', startQuiz)
let randomizeQuestions, currentQuestion
var questionElement = document.getElementById('question')
var answerButtons = document.getElementById('answerButtons')
var answer = document.getElementById('answer')

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



var questionsBank= [
    {
        question: "Which country invented ice cream?",
        answer: [
            {text: "China", correct: true},
            {test: "Russia", correct: false}
        ]
        
    }
]