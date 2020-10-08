import Question from "./question";
import { DOMSelectors } from './app'

class Quiz {
    constructor(questionList) {
        this.questionList = questionList || [];
        this.score = 0;
        this.current = 0;
    }


    // sets up html for next question
    showQuestion(){
        DOMSelectors.questionNumberLabel.innerHTML = `Question #${this.current + 1}`


        // insert question content
        DOMSelectors.code.innerHTML = this.questionList[this.current].content

        // insert question answer choices
        for(let i = 0; i < DOMSelectors.labels.length; i++){
            DOMSelectors.labels[i].innerHTML = this.questionList[this.current].choices[i];
        }

        // clear checkbox selection
        for(let i=0; i < DOMSelectors.radioButtons.length; i++) {
            DOMSelectors.radioButtons[i].checked = false;
        }

        // set-up progress bar
        const progress = ((this.current)/ this.questionList.length) * 100

        DOMSelectors.progressBar.style.width = `${progress}%`

    }

    // moves to next question
    nextQuestion(userChoice, callBack) {

        // score check should occur
        if (this.questionList[this.current].check(userChoice)){
            this.score += 1;
        }

        if (this.current !== this.questionList.length - 1) {
            // current question should change by one
            this.current += 1;

            // change html on page for next question
            this.showQuestion();
        }else{
            // if no more questions send results
            const result = `${this.score + 1}/${this.questionList.length}`;
            callBack(result);
        }
    }

    // initializes questions from JSON
    initializeQuestionsFromJSON(json){
        json.forEach(ques =>{
            const question = new Question(ques.content, ques.choices, ques.answer);
            this.questionList.push(question);
        })
    }
}

export default Quiz;
