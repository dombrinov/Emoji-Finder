import { data } from "./data/data.js";

const cards = document.body.querySelector(".main__container");

function createCards({ title, symbol, keywords }) {
  let pushCards = document.createElement("div");
  pushCards.className = "main__cards";
  pushCards.innerHTML = `<h2 class="main__cards__title">${symbol}</h2>
        <p class="main__cards__subtext">${title}</p>
        <p class="main__cards__text">${keywords}</p>`;
  return pushCards;
}

const inputs = document.querySelector("input");
inputs.addEventListener("input", (evt) => {
  let newArr = data.filter((item) => item.keywords.includes(inputs.value));
  cards.innerHTML = "";
  renderCards(newArr);
});

function renderCards(arr) {
  arr.forEach((obj) => {
    cards.append(createCards(obj));
  });
}

renderCards(data);
