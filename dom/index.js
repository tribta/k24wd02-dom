// document.querySelector("input").addEventListener("click", () => {
//   const header = document.getElementsByTagName("h1").item(0);
//   header.firstChild.data = "Updated The Header!!!";

//   // truy cập vào paragraph
//   const p = document.getElementsByTagName("p").item(0);
//   p.firstChild.data = "This is the 1st paragraph.";

//   const newText = document.createTextNode("This is the 2nd paragraph.");
//   const newElement = document.createElement("p");
//   newElement.appendChild(newText);
//   // <p>This is the 2nd paragraph.</p>
//   p.parentNode.appendChild(newElement);
// });

// LESSON: getter & setter place holder attr:
// const input = document.querySelector("input");
// let attr = input.placeholder;
// input.placeholder = "Update PlaceHolder";

// LESSON: getter & setter checkbox attribute:
// const input = document.querySelector("input");
// let attr = input.checked;
// input.checked = false;

// LESSON: Generate a table by event:
// function generateTable() {
//   const tbl = document.createElement("table");
//   //   tbl = <table></table>
//   const tblBody = document.createElement("tbody");
//   //   tblBody = <tbody></tbody>

//   // create cells [...]
//   for (let i = 0; i < 2; i++) {
//     const row = document.createElement("tr");
//     //   row = <tr></tr>
//     for (let j = 0; j < 2; j++) {
//       const cell = document.createElement("td");
//       //   cell = <td></td>
//       const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//       cell.appendChild(cellText);
//       //   <tr><td>cell in row ${i}, column ${j}</td></tr>
//       row.appendChild(cell);
//       //   <tr><td></td></tr>
//     }
//     tblBody.appendChild(row);
//     //<tbody><tr><td></td></tr></tbody>
//   }
//   tbl.appendChild(tblBody);
//   // <table><tbody><tr><td></td></tr></tbody></table>

//   document.body.appendChild(tbl);
//   // <body><table><tbody><tr><td></td></tr></tbody></table></body>

//   tbl.setAttribute("border", "2");
// }

// document.querySelector("input").addEventListener("click", generateTable);

// LESSON: Edit Attribute Style:
// function setBackGround() {
//   const p = document.getElementsByTagName("p");

//   const secondParagraph = p[1];

//   secondParagraph.style.background = "red";
// }

// document.querySelector("input").addEventListener("click", setBackGround);

// LESSON: Button Random Color by RGB(random(),random(),random())
// sử dụng Math.random();
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
  // Math.random() = 0 * 255 = 0
  // Math.random() = 1 * 255 = 255
  // Math.random() = 0.999999999999999 * 255 = 255
  // 254.9999999999999
}

btn.addEventListener("click", () => {
  const rgbColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rgbColor;
});
