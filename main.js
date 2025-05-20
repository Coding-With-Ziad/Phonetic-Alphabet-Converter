// //===============================
// // The Logic of Program
// //===============================
// // User choose Tourism or Aviation => save his choice is session storage
// // Enter the name or text whose want to convert
let input = document.querySelector(".form .input");
let submit = document.querySelector(".btn");
let result = document.querySelector(".result");
let choices = document.querySelectorAll('input[type="radio"]');

const letter = [
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

submit.addEventListener("click", () => {
  result.innerHTML = ""; // امسح أي نتايج سابقة قبل ما تبدأ

  const selected = document.querySelector('input[type="radio"]:checked');
  if (!selected) return;

  switch (selected.value) {
    case "Tourism":
      Tourism();
      break;
    case "Aviation":
      Aviation();
      break;
    case "both":
      both();
      break;
  }
});

// ===============================
// Aviation Function
// ===============================
function Aviation() {
  let h3 = document.createElement("h3");
  h3.textContent = `الطيران`;
  result.append(h3);
  let table = document.createElement("table");
  result.append(table);
  const code = [
    "Alpha",
    "Bravo",
    "Charly",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Jack",
    "Kilo",
    "Lima",
    "Mother",
    "Novembre",
    "Oppo",
    "Peter",
    "Quebic",
    "Romeo",
    "Sierra",
    "Tango",
    "United",
    "Victor",
    "Water",
    "X-Ray",
    "Yellow",
    "Zulu",
  ];

  let inputValue = input.value;
  let name = inputValue.split(" ");
  for (let i = 0; i < name.length; i++) {
    let tr = document.createElement("tr");
    table.append(tr);
    let td1 = document.createElement("td");
    td1.innerHTML = `${name[i]}`;
    td1.setAttribute("class", "label");
    tr.append(td1);

    let td2 = document.createElement("td");
    td2.setAttribute("class", "value");
    tr.append(td2);

    for (let z = 0; z < name[i].length; z++) {
      for (let y = 0; y < 26; y++) {
        if (
          name[i][z] === letter[y] ||
          name[i][z] === letter[y].toUpperCase()
        ) {
          td2.innerHTML += ` ${code[y]} `;
        }
      }
    }
  }
}

// ===============================
// Tourism Function
// ===============================
function Tourism() {
  let h3 = document.createElement("h3");
  h3.textContent = `السياحة`;
  result.append(h3);
  let table = document.createElement("table");
  result.append(table);
  const code = [
    "Able",
    "Baby",
    "Charly",
    "Dady",
    "Easy",
    "Father",
    "George",
    "Honey",
    "Item",
    "Juliett",
    "King",
    "Love",
    "Mic",
    "Nancy",
    "Oscar",
    "Papa",
    "Queen",
    "Roger",
    "Sugar",
    "Tomi",
    "Uniform",
    "Victor",
    "Wisky",
    "X-Ray",
    "Young",
    "Zebra",
  ];

  let inputValue = input.value;
  let name = inputValue.split(" ");
  for (let i = 0; i < name.length; i++) {
    let tr = document.createElement("tr");
    table.append(tr);
    let td1 = document.createElement("td");
    td1.innerHTML = `${name[i]}`;
    td1.setAttribute("class", "label");
    tr.append(td1);

    let td2 = document.createElement("td");
    td2.setAttribute("class", "value");
    tr.append(td2);

    for (let z = 0; z < name[i].length; z++) {
      for (let y = 0; y < 26; y++) {
        if (
          name[i][z] === letter[y] ||
          name[i][z] === letter[y].toUpperCase()
        ) {
          td2.innerHTML += ` ${code[y]} `;
        }
      }
    }
  }
}

// ===============================
// both Function
// ===============================
function both() {
  Tourism();
  Aviation();
}
