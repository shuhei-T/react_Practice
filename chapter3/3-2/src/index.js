// console.log("test");

// const title1 = document.getElementById("title");
// console.log(title1);

// const title2 = document.querySelector("#title");
// console.log(title2);

// const container = document.getElementsByClassName("container");
// console.log(container);

// const container2 = document.querySelector(".container");
// console.log(container2);

// const containers = document.querySelectorAll(".conatainer");
// console.log(containers);

// const divEl = document.createElement("div");

// const pEl = document.createElement("p");

// const h2El = document.createElement("h2");

// // divEl.appendChild(pEl);
// // divEl.appendChild(h2El);
// divEl.prepend(pEl);
// divEl.prepend(h2El);

// console.log(divEl);

const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

const div1El = document.querySelector(".container");

div1El.appendChild(buttonEl);

const h1El = document.getElementById("title");

const bodyEl = document.querySelector("body");

bodyEl.removeChild(h1El);

bodyEl.textContent = null;
