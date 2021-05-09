const startButton = document.getElementById('start-btn')
const questonContainerElement = document.getElementById
('question-container')
const scoreSection = document.querySelector('.score')
let countdown, currentQ, score;
startButton.addEventListener('click' , startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questonContainerElement.classList.remove('hide')
    countdown = 60;
    startTimer();
    currentQ = 0;
    score = 0;
    setNextQuestion()
}

function startTimer(){
    let quizInterval = setInterval(function (){
        countdown--;
        document.getElementById("timer").textContent = countdown
    
        if(countdown <= 0 || currentQ >= question.length) {
            clearInterval(quizInterval)
            questonContainerElement.classList.add('hide')
            scoreSection.classList.remove('hide')
            document.querySelector("#scoreNum").textContent = score
        }
    }, 1000)
}

function setNextQuestion(){
    document.querySelector("#question").textContent = question[currentQ].question
    document.querySelector("#optionOne").textContent = question[currentQ].answers[0]
    document.querySelector("#optionTwo").textContent = question[currentQ].answers[1]
    document.querySelector("#optionThree").textContent = question[currentQ].answers[2]
    document.querySelector("#optionFour").textContent = question[currentQ].answers[3]
    document.querySelector("#optionFive").textContent = question[currentQ].answers[4]

}

function checkAnswer(){
    console.log(this.textContent)
    //check if correct or incorrect
    if(this.textContent === question[currentQ].correct){
        console.log("good job score++")
        score++;
    }else {
        console.log("wrong time go down")
        countdown-= 10
    }

    //then go up one in the currentQ
    currentQ++;
    if(currentQ < question.length){
        setNextQuestion()
    }
}

const question = [
   {
       question: 'Inside which HTML element do we put the JavaScript?',
       answers: ["<javascript>", "<script>", "<scripting>", "<js>"],
       correct: "<script>"
   },
   {
       question: 'Where is the correct place to insert a JavaScript?',
       answers: ["The <head> section", "The <body> section", "Both the <head> and <body> section", "What the hell is JavaScript?"],
       correct: "Both the <head> and <body> section"
   },
   {
       question: 'The external JavaScript file must contain the <script> tag.',
       answers: ["True", "False", "Maybe", "Nevermind"],
       correct: "True"
   },
   {
       question: 'How do you write "Hello World" in an alert box?',
       answers: ["msgBox", "alert", "msg", "alertBox"],
       correct: "alert"
   },
   {
       question: 'How do you create a function in JavaScript?',
       answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "Honestly what is a function?"],
       correct: "funtion myFunction()"
   }


    

]

document.querySelector("#optionOne").addEventListener("click", checkAnswer)
document.querySelector("#optionTwo").addEventListener("click", checkAnswer)
document.querySelector("#optionThree").addEventListener("click", checkAnswer)
document.querySelector("#optionFour").addEventListener("click", checkAnswer)
document.querySelector("#optionFive").addEventListener("click", checkAnswer)