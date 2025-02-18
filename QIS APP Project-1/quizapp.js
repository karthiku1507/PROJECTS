const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");


let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
    {
        question: "what is capital of andhra pradesh?",
        options:["amaravati","ongole","kadapa","visakapatanam","chittor"],
        correctAnswer:"amaravati"
    },
    {
        question:"what is capital of telagana?",
        options:["karimnagar","pedapalli","hyderabad","waragal","sedipeta"],
        correctAnswer:"hyderabad"
    }
]


function loadQuestion(){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;


    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option,index)=>{
       const optionButton  = document.createElement("button");
       optionButton.textContent = option;
       
       optionButton.onclick = function(){
        selectAnswer(option,currentQuestion.correctAnswer)
       }

       optionsContainer.appendChild(optionButton)
    })
}

function selectAnswer(selectedOption,correctAnswer){
    if(selectedOption===correctAnswer) {
        feedbackElement.textContect = "correct!";
        score++;
    } else{
        feedbackElement.textContent = "Incorrect.the correct answer is:" + correctAnswer;
    }

    currentQuestionIndex++;
    if(currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz(){
    quizContainer.innerHTML = "<h2>Quiz completed</h2>";
    scroreElement.textContect = "final score: " + score + "out of"+ quizQuestions.length;
}

function submitAnswer(){
    const selectedOption = document.querySelector('input[name="option":checked"');
    if(selectOption){
        selectAnswer(selectedOption.value)
    }
}


loadQuestion();