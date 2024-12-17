const startScreen = document.getElementById("start-screen");
const game = document.getElementById("game");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");

const questions = [
  {
    question: "Which planet is the hottest in our solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "How long does it take for light from the Sun to reach Earth?",
    answers: [
      { text: "8 seconds", correct: false },
      { text: "8 minutes", correct: true },
      { text: "8 hours", correct: false },
      { text: "8 days", correct: false }
    ]
  },
  {
    question: "Which galaxy do we live in?",
    answers: [
      { text: "Andromeda Galaxy", correct: false },
      { text: "Milky Way Galaxy", correct: true },
      { text: "Whirlpool Galaxy", correct: false },
      { text: "Sombrero Galaxy", correct: false }
    ]
  },
  {
    question: "What is the name of the first human to travel into space?",
    answers: [
      { text: "Neil Armstrong", correct: false },
      { text: "Buzz Aldrin", correct: false },
      { text: "Yuri Gagarin", correct: true },
      { text: "John Glenn", correct: false }
    ]
  },
  {
    question: "Which planet has the most extensive ring system?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
      { text: "Saturn", correct: true }
    ]
  },
  {
    question: "What is a supernova?",
    answers: [
      { text: "A type of star", correct: false },
      { text: "An explosion of a star", correct: true },
      { text: "A black hole formation", correct: false },
      { text: "A planetary collision", correct: false }
    ]
  },
  {
    question: "Which spacecraft carried the first astronauts to land on the Moon?",
    answers: [
      { text: "Voyager 1", correct: false },
      { text: "Apollo 11", correct: true },
      { text: "Challenger", correct: false },
      { text: "Columbia", correct: false }
    ]
  },
  {
    question: "What force keeps planets in orbit around the Sun?",
    answers: [
      { text: "Magnetism", correct: false },
      { text: "Gravity", correct: true },
      { text: "Nuclear force", correct: false },
      { text: "Inertia", correct: false }
    ]
  },
  {
    question: "What is the term for a rocky object that enters Earth's atmosphere and burns up?",
    answers: [
      { text: "Asteroid", correct: false },
      { text: "Comet", correct: false },
      { text: "Meteor", correct: true },
      { text: "Meteorite", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  startScreen.style.display = "none"; 
  game.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "inline-block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "inline-block";
  resetButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}


nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

document.getElementById("start-btn").addEventListener("click", startQuiz);

resetButton.addEventListener("click", () => {
  startQuiz();
});
