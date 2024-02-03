const questions = [{
    question: "What is an Array?",
    answers: [
        { text: "A Build-In Function in Javascript", correct: false },
        { text: "A Simple Data-structure", correct: true },
        { text: "A Javascript Backend Framework", correct: false },
        { text: "A User Defined Datatype", correct: false }
    ]
},{
    question: "What is the Full Form of SQL?",
    answers: [
        { text: "Strong Qwerty Logic", correct: false },
        { text: "Source Query Logic", correct: false },
        { text: "Semantic Query Language", correct: false },
        { text: "Structured Query Language", correct: true }
    ]
},{
    question: "What is the Full Form of UPS?",
    answers: [
        { text: "Unlimited Program Structure", correct: false },
        { text: "Ultimate Project Setup", correct: false },
        { text: "Un-Interrupted Power Supply", correct: true },
        { text: "Union Public Service", correct: false }
    ]
},{
    question: "What is the Full Form of PHP?",
    answers: [
        { text: "Pre Home Page", correct: false },
        { text: "Product Hustle Project", correct: false },
        { text: "Post Handy Project", correct: false },
        { text: "Pre-Processor Hypertext", correct: true }
    ]
},{
    question: "What is the Full Form of CSS?",
    answers: [
        { text: "Control Search Syntax", correct: false },
        { text: "Compiler Style Syntax", correct: false },
        { text: "Cascading Style Sheet", correct: true },
        { text: "Coding Style Source", correct: false }
    ]
},{
    question: "What is the Full Form of CPU?",
    answers: [
        { text: "Central Processing Unit", correct: true },
        { text: "Control Personal unit", correct: false },
        { text: "Coding Project Unit", correct: false },
        { text: "Compiler Production Unit", correct: false }
    ]
},{
    question: "What is the Full Form of ALU?",
    answers: [
        { text: "Arithmatic Logical Unit", correct: true },
        { text: "Algorithmic Local Unit", correct: false },
        { text: "Artificial Logic Unit", correct: false },
        { text: "Arguments Local Union", correct: false }
    ]
},{
    question: "What is the Full Form of JSON?",
    answers: [
        { text: "Java Script Object Notation", correct: true },
        { text: "Java Script Object Neural", correct: false },
        { text: "Java Structure On Network", correct: false },
        { text: "Java Structure Object Network", correct: false }
    ]
},{
    question: "What is the Programming Structure of the Language Java?",
    answers: [
        { text: "Both POP and OOP Paradigm Programming Language", correct: false },
        { text: "Neither POP or OOP Paradigm Programming Language", correct: false },
        { text: "A Procedural Orianted Programming Language", correct: false },
        { text: "A Object Orianted Programming Language", correct: true }
    ]
},{
    question: "What type of Framework is Laravel?",
    answers: [
        { text: "A PHP Back-end Framework", correct: true },
        { text: "A Java Front-end Framework", correct: false },
        { text: "A Javascript Back-end Framwork", correct: false },
        { text: "A Luascript Front-end Framwork", correct: false }
    ]
}];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();