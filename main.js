function generatePassword(length, lowercase, uppercase, number, symbol) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let AL = [
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
  ];
  let AU = [
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
  ];
  let sym = [
    "@",
    "#",
    "$",
    "&",
    "_",
    "-",
    "+",
    "%",
    "/",
    "£",
    "¢",
    "~",
    "<",
    ".",
    ",",
    "?",
    "!",
    ":",
    ";",
    '"',
    "'",
  ];

  let subArray = [];

  let strength;

  lowercase ? subArray.push(...AL) : "";
  uppercase ? subArray.push(...AU) : "";
  number ? subArray.push(...numbers) : "";
  symbol ? subArray.push(...sym) : "";
  let finalArray = [];
  for (var i = 0; i < length; i++) {
    finalArray.push(subArray[Math.ceil(Math.random() * subArray.length)]);
  }

  let password = finalArray.join("");

  if (length <= 4) {
    strength = "weak";
  } else if (length >= 5 && length <= 6) {
    strength = "fair";
  } else if (length >= 7 && length <= 10) {
    strength = "medium";
  } else {
    strength = "strong";
  }

  // weak fair medium strong
  return {
    password,
    strength,
  };
}
console.log(generatePassword(12, true, true, true, true));

// getting data

let generate = document.getElementById("generate");
let strength = document.getElementById("strength");
let password = document.getElementById("password");
let myRange = document.getElementById("myRange");
let length = document.getElementById("length");
let copy = document.getElementById("copy");
let weak = document.getElementById("weak");
let fair = document.getElementById("fair");
let medium = document.getElementById("medium");
let strong = document.getElementById("strong");

console.log(uppercase);

// handel range
myRange.onchange = function (e) {
  console.log(e.target.value);
  length.textContent = e.target.value;
};

// handel generate

generate.onclick = function () {
  let uppercase = document.getElementById("uppercase").checked;
  let lowercase = document.getElementById("lowercase").checked;
  let number = document.getElementById("number").checked;
  let symbol = document.getElementById("symbol").checked;
  let data = generatePassword(
    length.textContent,
    lowercase,
    uppercase,
    number,
    symbol
  );
  data.password
    ? (password.textContent = data.password)
    : (password.textContent = "PLEASE CHOOSE ONE OPTION AT LEAST");

  //strength.textContent = data.strength;
  data.strength == "weak"
    ? ((weak.style.backgroundColor = "orange"),
      (fair.style.backgroundColor = "#2f3133"),
      (medium.style.backgroundColor = "#2f3133"),
      (strong.style.backgroundColor = "#2f3133"))
    : "";

  data.strength == "fair"
    ? ((weak.style.backgroundColor = "orange"),
      (fair.style.backgroundColor = "orange"),
      (medium.style.backgroundColor = "#2f3133"),
      (strong.style.backgroundColor = "#2f3133"))
    : "";

  data.strength == "medium"
    ? ((weak.style.backgroundColor = "orange"),
      (fair.style.backgroundColor = "orange"),
      (medium.style.backgroundColor = "orange"),
      (strong.style.backgroundColor = "#2f3133"))
    : "";

  data.strength == "strong"
    ? ((weak.style.backgroundColor = "orange"),
      (fair.style.backgroundColor = "orange"),
      (medium.style.backgroundColor = "orange"),
      (strong.style.backgroundColor = "orange"))
    : "";
  console.log(data);
};

//handel copy

copy.onclick = function () {
  navigator.clipboard.writeText(password.textContent);

  alert("Copied Text: " + password.textContent);
};
