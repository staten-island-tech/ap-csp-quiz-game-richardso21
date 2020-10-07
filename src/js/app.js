const DOMSelectors = {
  code: document.querySelector(".code-block code"),
};

class Question {
  constructor(content, choices, answer) {
    this.content = content;
    this.choices = choices;
    this.answer = answer;
  }

  check(user_choice) {
    return user_choice === this.answer;
  }
}

const questionsList = [
  new Question(
    `
console.log('cat');
    `,
    ["dog", "cat", `10`, "console.log('cat')"],
    1
  ),
  new Question(
    `
const x = 5;
const y = 10;
console.log(x + y / 2);
    `,
    ["10", "7.5", "5", "2"],
    0
  ),
  new Question(
    `
const a = 102;
const b = 2 * a;
console.log(2 * (a + b));
    `,
    ["102", "204", "306", "612"],
    3
  ),
  new Question(
  `
const h = 24;
const i = "10";
console.log(h + i);
  `,
    ["34", "Error", "2410", "1024"],
    2
  ),
  new Question(
  `
const x = 5;
const y = (x) => (x * x);
const z = (a, b) => (a**2 + b*2);
console.log(x + z(x, y(x)));
  `,
    ["Error", "5", "256", "80"],
    3
  ),
  new Question(
  `
function a() {
  return 1;
};
const b = a;
console.log(b());
  `,
    ["0", "1", "Error", "b"],
    1
  ),
  new Question(
  `
console.log([] == 0);
  `,
    ["true", "false"],
    0
  ),
  new Question(
  `
console.log(log(console.log()))
  `,
    ["Error", "", "undefined", "console.log()"],
    0
  )
];

function init() {
  const hljs = require("highlight.js");
  hljs.initHighlightingOnLoad();

  const q = questionsList[2];
  // DOMSelectors.code.innerHTML = q.content;
}
init();
