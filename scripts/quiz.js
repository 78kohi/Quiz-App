// Get all elements html
const configContainer = document.querySelector(".quiz-config")
const startBtn = document.querySelector(".start-btn")
const quizContainer = document.querySelector(".quiz-container")
const answerOptions = document.querySelector(".answer-options")
const nextQuestionBtn = document.querySelector(".next-question-btn")
const questionStatus = document.querySelector(".question-status")
const resultMsg = document.querySelector(".result-msg")
const tryAgainBtn = document.querySelector(".try-again-btn")
const timerDisplay = document.querySelector(".duration")
const resultContainer = document.querySelector('.result-container');

// reset quiz on window load
window.onload = () => {
  resultContainer.style.display = 'none';
  quizContainer.style.display = 'none';
  configContainer.style.display = 'block';
};

// reset timer
const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`
}

// global variables
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT
let timer = null;
let quizCategory = 'programming';
let numberOfQuestions = 5;
let quizDifficulty = 'easy';
let correctAnswers = 0;
let currentQuestion = null;
const questionIndexHistory = [];

// show quiz result when done
const showQuizResult = () => {
  quizContainer.style.display = 'none'
  resultContainer.style.display = 'block'
  resultMsg.innerHTML = `You answered <b>${correctAnswers}</b> out of <b>${numberOfQuestions}</b> questions correctly. Keep it up!`
}

// start the timer
const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;

    if(currentTime <= 0) {
      clearInterval(timer)
      highlightCorrectAnswer()
      nextQuestionBtn.style.visibility = 'visible';

      answerOptions.querySelectorAll('.answer-option').forEach(option => option.style.pointerEvents = "none")
    }
  }, 1000)
}

// Generate Random Question
const getRandomQuestions = () => {
  // get random question each category user selects
  const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.replace(/\s+/g, '').toLowerCase())[quizDifficulty] || [];

  // show result when quiz is completed
  if(questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
    return showQuizResult()
  }

  const availableQuestion = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));
  const randomQuestions = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]

  questionIndexHistory.push(categoryQuestions.indexOf(randomQuestions))
  return randomQuestions
}

// Highlight the correct answer option and add icon
const highlightCorrectAnswer = () => {
  const correctOption = answerOptions.querySelectorAll('.answer-option')[currentQuestion.correctAnswer];
  correctOption.classList.add('correct');
  const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
  correctOption.insertAdjacentHTML("beforeend", iconHTML)
}

// Handle user answer selection
const handleAnswer = (option, answerIndex) => {
  clearInterval(timer);

  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? 'correct' : 'incorrect')
  !isCorrect ? highlightCorrectAnswer() : correctAnswers++;

  const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
  option.insertAdjacentHTML("beforeend", iconHTML)

  // Disable all answer option after one option is selected
  answerOptions.querySelectorAll('.answer-option').forEach(option => option.style.pointerEvents = "none")

  nextQuestionBtn.style.visibility = 'visible';
}

const resetImg = () => {
  const questionImgContainer = document.querySelector(".question-img-container")
  const existingImg = questionImgContainer.querySelector('.question-img')
  // Resets the existing image
  if(existingImg) existingImg.remove()
}

// Render the current question and its option in the quiz
const renderQuestion = () => {
  currentQuestion = getRandomQuestions()
  if(!currentQuestion) return;

  resetTimer()
  startTimer()

  answerOptions.innerHTML = "";
  nextQuestionBtn.style.visibility = 'hidden';

  document.querySelector(".question-text").textContent = currentQuestion.question;
  document.querySelector('.question-img-container').innerHTML = ''

  questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`
  
  if(currentQuestion.imageID) {
    let questionImgContainer = document.querySelector(".question-img-container")
    questionImgContainer = '';
    imgHTML = ''

    if(quizCategory === 'countryflag') {
      imgHTML = `<img src="https://flagcdn.com/${currentQuestion.imageID}.svg" class="question-img">`;
    } else if(quizCategory === 'football') {
      imgHTML = `<img src="imgs/football/${currentQuestion.imageID}.png" class="question-img">`;
    } else if(quizCategory === 'space') {
      imgHTML = `<img src="imgs/space/${currentQuestion.imageID}.png" class="question-img">`;
    }

    if(imgHTML) {
      document.querySelector(".question-img-container").innerHTML = imgHTML

      const newImg = document.querySelector('.question-img-container').querySelector('.question-img')
      if(quizCategory === 'football' && currentQuestion.imageID === 'realmadrid') {
        newImg.style.width = '75px'
      } else if(quizCategory === 'space' && currentQuestion.imageID === 'solarsystemearth') {
        newImg.style.width = '250px'
      } else if(quizCategory === 'space' && currentQuestion.imageID === 'solarsystemsaturn') {
        newImg.style.width = '250px'
      }

    }
  }

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.classList.add('answer-option');
    li.textContent = option;
    answerOptions.appendChild(li);
    li.addEventListener('click', () => handleAnswer(li, index))
  })
};

const startQuiz = () => {
  configContainer.style.display = 'none'
  quizContainer.style.display = 'block'

  questionIndexHistory.length = 0

  quizCategory = configContainer.querySelector('.category-option.active').textContent.toLowerCase().replace(/\s+/g, '');
 
  if(quizCategory === 'any'){
    quizCategory = questions[Math.floor(Math.random() * questions.length)].category.toLowerCase()
  }
 
  numberOfQuestions = parseInt(configContainer.querySelector('.question-option.active').textContent);
  quizDifficulty = configContainer.querySelector('.difficulty-option.active').textContent.toLowerCase();

  resetImg()

  renderQuestion()
}

document.querySelectorAll('.category-option, .question-option, .difficulty-option').forEach(option => {
  option.addEventListener('click', () => {
    option.parentNode.querySelector('.active').classList.remove('active');
    option.classList.add('active');
  });
});

const resetQuiz = () => {
  resetTimer();
  correctAnswers = 0;
  questionIndexHistory.length = 0
  resultContainer.style.display = 'none'
  quizContainer.style.display = 'none'
  configContainer.style.display = 'block'
  resetImg()
}

renderQuestion()

nextQuestionBtn.addEventListener('click', renderQuestion);
tryAgainBtn.addEventListener('click', resetQuiz);
startBtn.addEventListener('click', startQuiz);
