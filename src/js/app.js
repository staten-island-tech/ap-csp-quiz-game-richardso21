const DOMSelectors = {
  code: document.querySelector(".code-block code"),
};

class Question {
  constructor(content, choices) {
    this.content = content;
    this.choices = choices;
  }

  check(user_answer) {
    return eval(console.log(user_answer)) === eval(this.content);
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
    ["10", "7.5", "5", "2"]
  ),
  new Question(
    `
const a = 102;
const b = 2 * a;
console.log(2 * (a + b));
    `,
    [""]
  ),
  `
const h = 24;
const i = "10";
console.log(h + i);
  `,
  `
const x = 5;
const y = (x) => (x * x);
const z = (a, b) => (a**2 + b*2);
console.log(x + z(x, y(x)));
  `,
  `
function a() {
  return 1;
};
const b = a;
console.log(b());
  `,
  `
console.log([] == 0);
  `,
  `
  
  `,
];

function init() {
  const hljs = require("highlight.js");
  hljs.initHighlightingOnLoad();
  const q = questionsList[0];
  console.log(q.check("10"))
}
init();
