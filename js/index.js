let addBtn = document.querySelector(".add__player");
let playerList = document.querySelector(".list");
let inputVal = document.querySelector(".inp");
let darkMode = document.querySelector(".header");
let body = document.querySelector("body");
// for player adding to list
let obj = {};
addBtn.addEventListener("click", () => {
  inputVal.value && (obj[inputVal.value] = inputVal.value);
  let val = "";
  for (const key in obj) {
    val += `<li >${obj[key]}  <button class="li__btn" id= "${obj[key]}">close</button></li>`;
  }
  playerList.innerHTML = val;
  inputVal.value = "";
  // let liElm = document.getElementsByClassName("li__btn");
  // console.log({ obj });
  // for (const elem of liElm) {
  //   elem.addEventListener("click", (e) => {
  //     console.log(obj);
  //     delete obj[e.target.id];
  //     let value = "";
  //     for (let key in obj) {
  //       value += `<li >${obj[key]}  <button class="li__btn" id= "${obj[key]}">close</button></li>`;
  //     }
  //     playerList.innerHTML = value;
  //   });
  // }
});

playerList.addEventListener("click", () => {
  // let liElm = document.getElementsByClassName("li__btn");
  // for (const elem of liElm) {
  //   elem.addEventListener("click", (e) => {
  //     console.log(obj);
  //     delete obj[e.target.id];
  //     let value = "";
  //     for (let key in obj) {
  //       value += `<li >${obj[key]}  <button class="li__btn" id= "${obj[key]}">close</button></li>`;
  //     }
  //     playerList.innerHTML = value;
  //   });
  // }
});

// for dark mode
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});
