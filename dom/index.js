/**
 * ==============================
 * LESSON: DOM
 * ==============================
 * 1.Kế thừa
 * ==============================
 */

// document --> HTMLDocument --> Document --> Node
// --> EvenTarget --> Object.Prototype --> null

// div --> HTMLDivElement --> HTMLElement --> Element Node
// --> EvenTarget --> Object.Prototype --> null

// LESSON: querySelectorAll("");
// tìm kiếm và trả về danh sách elements.

const p = document.querySelectorAll("p");
// trả về danh sách NodeList chứa element

// alert(p[0].nodeName);
for (const element of p) {
  console.log(element.nodeName);
}

console.log(p instanceof NodeList); // true

// NOTE: sử dụng sự kiện (event) onload:
// sẽ tải function mỗi khi loading finished
window.onload = () => {
  const heading = document.createElement("h1");
  // <h1></h1>
  const headingText = document.createTextNode("My First Time Access DOM.");
  // My First Time Access DOM.
  heading.appendChild(headingText);
  // <h1>My First Time Access DOM.</h1>
  document.body.appendChild(heading);
  // <body><h1>My First Time Access DOM.</h1></body>
};

// LESSON: Attribute bên trong Element
const table = document.getElementById("table");
// table = <table>
const tableAttr = table.attributes;
// NamedNodeMap {0: id, 1: border, id: id, border: border, length: 2}
for (const attr of tableAttr) {
  attr.nodeName.toLowerCase() === "border"
    ? (table.border = "10")
    : "not found";
}
