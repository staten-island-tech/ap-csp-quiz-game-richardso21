import data from './questions.json'
import Quiz from './quiz'

const DOMSelectors = {
  mainContainer: document.querySelector('#content'),
  questionNumberLabel :document.querySelector("#question-number"),
  submitButton: document.querySelector('#submit-btn'),

  radioButtons: document.querySelectorAll('input[name="customRadio"]'),
  labels: document.querySelectorAll('.custom-control-label'),
  progressBar: document.querySelector('.progress-bar'),

  code: document.querySelector(".code-block code")
};


function init() {
  const hljs = require("highlight.js");
  hljs.initHighlightingOnLoad();

  // start quiz
  startQuiz();
}

function startQuiz(){
  // create quiz instance
  const quiz = new Quiz()
  quiz.initializeQuestionsFromJSON(data);
  quiz.showQuestion()


  // event listener
  DOMSelectors.submitButton.addEventListener('click',function (e) {
    // get answer from radio buttons
    let selectedValue;
    for (const radioBtn of DOMSelectors.radioButtons) {
      if (radioBtn.checked) {
        selectedValue = radioBtn.value;
        break;
      }
    }


    // go to next question, and at the end show results
    selectedValue = parseInt(selectedValue);

    quiz.nextQuestion(selectedValue, function (result) {
      // results page
      DOMSelectors.mainContainer.innerHTML = `<h1 class="text-center">${result}</h1>`
    })


  });
}


init();


export { DOMSelectors };