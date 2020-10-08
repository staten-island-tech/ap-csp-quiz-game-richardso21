import Question from "./question";
import { DOMSelectors } from './app'

class Quiz {
    constructor(questionList) {
        this.questionList = questionList || [];
        this.score = 0;
        this.current = 0;
    }

    showQuestion(){
        DOMSelectors.questionNumberLabel.innerHTML = `Question #${this.current + 1}`

        for(let i = 0; i < DOMSelectors.labels.length; i++){
            DOMSelectors.labels[i].innerHTML = this.questionList[this.current].choices[i];
        }

        DOMSelectors.code.innerHTML = this.questionList[this.current].content


        const progress = ((this.current)/ this.questionList.length) * 100

        // set progress bar to
        DOMSelectors.progressBar.style.width = `${progress}%`

    }

    nextQuestion(userChoice) {

        // score check should occur
        if (this.questionList[this.current].check(userChoice)){
            this.score += 1;
        }

        if (this.current !== this.questionList.length - 1) {
            // current question should change by one
            this.current += 1

            // change html on page for next question
            this.showQuestion()
        }else{
            // show results page
            console.log(this.score)
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
