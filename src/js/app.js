import data from './questions.json'
import Quiz from './quiz'

const DOMSelectors = {
  questionNumberLabel :document.querySelector("#question-number"),
  submitButton: document.querySelector('#submit-btn'),

  customRadio: document.querySelectorAll('input[name="customRadio"]'),
  labels: document.querySelectorAll('.custom-control-label'),

  code: document.querySelector(".code-block code")
};


function init() {
  const hljs = require("highlight.js");
  hljs.initHighlightingOnLoad();

  // create quiz instance
  const quiz = new Quiz()
  quiz.initializeQuestionsFromJSON(data);
  quiz.showQuestion()

  DOMSelectors.submitButton.addEventListener('click',function (e) {

    let selectedValue;
    for (const rb of DOMSelectors.customRadio) {
      if (rb.checked) {
        selectedValue = rb.value;
        break;
      }
    }

    // go to next question
    quiz.nextQuestion(parseInt(selectedValue))
  });
}


init();

export { DOMSelectors };