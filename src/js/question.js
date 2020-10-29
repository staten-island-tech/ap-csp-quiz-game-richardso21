class Question {
    constructor(content, choices, answer) {
        this.content = content;
        this.choices = choices;
        this.answer = answer;
    }

    // compares user answer with real answer
    check(user_choice){
        return user_choice === this.answer;
    }
}

export default Question;