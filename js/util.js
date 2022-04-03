let addBtn = document.querySelector(".add__player");
let playerList = document.querySelector(".list");
let inputVal = document.querySelector(".inp");
let darkMode = document.querySelector(".header");
let body = document.querySelector("body");
let val = "";

// utils
function addItem() {
  inputVal.value && (val += `<li >${inputVal.value} <button>X</button></li>`);
  playerList.innerHTML = val;
  inputVal.value = "";
}

// adding manually
addBtn.addEventListener("click", addItem);

// adding by Enter Button
document.addEventListener("keydown", (e) => {
  e.key === "Enter" && addItem();
});

// deleting
playerList.addEventListener("click", (e) => {
  playerList.removeChild(e.target.parentNode);
});

// for dark mode
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});
