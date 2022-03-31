let addBtn = document.querySelector(".add__player");
let playerList = document.querySelector(".list");
let inputVal = document.querySelector(".inp");
let darkMode = document.querySelector(".header");
let body = document.querySelector("body");
let val = "";

// for player adding to list
addBtn.addEventListener("click", () => {
  inputVal.value && (val += `<li> ${inputVal.value} </li>`);
  playerList.innerHTML = val;
  inputVal.value = "";
});

// for dark mode

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});
