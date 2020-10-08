import Question from "./question";
import { DOMSelectors } from "./app";
const hljs = require("highlight.js");

class Quiz {
  constructor(questionList) {
    this.questionList = questionList || [];
    this.score = 0;
    this.current = 0;
  }

  // sets up html for next question
  showQuestion() {
    DOMSelectors.questionNumberLabel.innerHTML = `Question #${
      this.current + 1
    }`;

    // insert question content w/ highlighted code (w/ hl.js)
    const highlighted_code = hljs.highlightAuto(
      this.questionList[this.current].content
    ).value;

    DOMSelectors.code.innerHTML = highlighted_code;

    // insert question answer choices
    DOMSelectors.labels.forEach((label, i) => {
      label.innerHTML = this.questionList[this.current].choices[i];
    });

    // clear checkbox selection
    DOMSelectors.radioButtons.forEach((radio) => (radio.checked = false));

    // set-up progress bar
    const progress = (this.current / this.questionList.length) * 100;

    DOMSelectors.progressBar.style.width = `${progress}%`;

    // moves to next question
    // nextQuestion(userChoice, callBack) {}
  }

  nextQuestion(userChoice, callback) {
    if (this.current !== this.questionList.length - 1) {
      // score check should occur
      if (this.questionList[this.current].check(userChoice)) {
        this.score += 1;
      }

      if (this.current !== this.questionList.length - 1) {
        // current question should change by one
        this.current += 1;

        // change html on page for next question
        this.showQuestion();
      }
    }else {
      const result = `${this.score + 1}/${this.questionList.length}`;
      callback(result);
    }
  }

  // initializes questions from JSON
  initializeQuestionsFromJSON(json) {
    json.forEach((ques) => {
      const question = new Question(ques.content, ques.choices, ques.answer);
      this.questionList.push(question);
    });
  }
}

export default Quiz;
