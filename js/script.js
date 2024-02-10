const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pass_one = document.getElementById("pass_one");
let pass_two = document.getElementById("pass_two");

function generatePass(length) {
  let result_one = "";
  for (let i = 0; i < length; i++) {
    let all = Math.floor(Math.random() * characters.length);
    result_one += characters[all];
  }
  pass_one.textContent = result_one;

  let result_two = "";
  for (let i = 0; i < length; i++) {
    let all = Math.floor(Math.random() * characters.length);
    result_two += characters[all];
  }
  pass_two.textContent = result_two;
}

let message_one = document.getElementById("message_one");
let message_two = document.getElementById("message_two");
function copy_pass_one() {
  let text = pass_one.innerText;
  if (text !== "") {
    navigator.clipboard.writeText(text).then(function () {
      message_two.textContent = "";
      message_one.textContent = "Copied ✅";
      let timer = setInterval(function () {
        message_one.textContent = "";
        clearInterval(timer);
      }, 3000);
    });
  }
}

function copy_pass_two() {
  let text = pass_two.innerText;
  if (text !== "") {
    navigator.clipboard.writeText(text).then(function () {
      message_one.textContent = "";
      message_two.textContent = "Copied ✅";
      let timer = setInterval(function () {
        message_two.textContent = "";
        clearInterval(timer);
      }, 3000);
    });
  }
}
