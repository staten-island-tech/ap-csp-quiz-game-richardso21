import data from "./questions.json";
import Quiz from "./quiz";

const DOMSelectors = {
  mainContainer: document.querySelector("#content"),
  questionNumberLabel: document.querySelector("#question-number"),
  submitButton: document.querySelector("#submit-btn"),

  radioButtons: document.querySelectorAll('input[name="customRadio"]'),
  labels: document.querySelectorAll(".custom-control-label"),
  progressBar: document.querySelector(".progress-bar"),

  code: document.querySelector(".code-block code")
};

function init() {
  // init highlight.js
  const hljs = require("highlight.js");
  hljs.initHighlightingOnLoad();

  // start quiz
  startQuiz();
}


function startQuiz() {
  // create quiz instance
  const quiz = new Quiz();
  quiz.initializeQuestionsFromJSON(data);
  quiz.showQuestion();

  // event listener
  DOMSelectors.submitButton.addEventListener("click", function (e) {
    // get answer from radio buttons
    let selectedValue;
    for (const radioBtn of DOMSelectors.radioButtons) {
      if (radioBtn.checked) {
        selectedValue = radioBtn.value;
        break;
      }
    }
    // don't let user press button without selecting choice
    if (selectedValue === undefined) return;

    // go to next question, and at the end show results
    selectedValue = parseInt(selectedValue);

    quiz.nextQuestion(selectedValue, function(result){
      // if no more questions send results
      DOMSelectors.mainContainer.innerHTML = `
        <h1 class="text-center score-text">${result}</h1>
        <div class="text-center">
          <a href="../question.html" class="btn btn-lg btn-primary" id="play-again-btn">Retake the Quiz</a>
        </div>`
    });
  });
}


init();

export { DOMSelectors };
