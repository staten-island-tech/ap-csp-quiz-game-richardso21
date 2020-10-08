class Question {
    constructor(content, choices, answer) {
        this.content = content;
        this.choices = choices;
        this.answer = answer;
    }

    check(user_choice){
        return user_choice === this.answer;
    }
}

export default Question;