const questions = [
    {
        question: "What does HTTP stand for?",
        answers: [
             { text: "Handoff Tacked Text Power", correct: false },
             { text: "Hypertext Transfer Protocol", correct: true },
             { text: "Hypertext .tar Protocol", correct: false },
             { text: "Hatched Text Tackle Protocol", correct: false }
        ]
    },
    {
        question: "What is the most popular coding language?",
        answers: [
            { text: "C", correct: false },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: true },
            { text: "PHP", correct: false }
        ]
    },
    {
        question: "What OS does the Tesla UI use?",
        answers: [
            { text: "Linux", correct: true },
            { text: "macOS", correct: false },
            { text: "TeslaOS", correct: false },
            { text: "Microsoft Windows", correct: false }
        ]
    },
    {
        question: "When was CSS invented?",
        answers: [
            { text: "2005", correct: false },
            { text: "2000", correct: false },
            { text: "1996", correct: true },
            { text: "1995", correct: false }
        ]
    },
    {
        question: "What was the first computer virus called?",
        answers: [
            { text: "NanoCircuit.exe", correct: false },
            { text: "Corona", correct: false },
            { text: "Windows_5_PreRelease.msu", correct: false },
            { text: "The Creeper", correct: true }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "CAP Sheets for Style", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Correlated Style Sheets", correct: false },
            { text: "Chris Sheeting Styles", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markdown Language", correct: false },
            { text: "Hypertext Markup Language", correct: true },
            { text: "Handoff Match Lines", correct: false },
            { text: "Ham Taps Maker Language", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = 'none';
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    } else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score}/${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})


startQuiz();