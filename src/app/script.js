// import { data } from "./data/data.js";
const response = await fetch("https://emoji.ymatuhin.workers.dev/")
const data = await response.json()


const cards = document.body.querySelector(".main__container");

function getUniqueKeywords(arr) {
  for (let obj of arr) {
    // const result = obj.keywords.split(" ").reduce((acc, item) => {
    //   if (acc.includes(item)) {
    //     return acc; // верни аккумулятор если  строка уже есть в аккумуляторе
    //   }
    //   return [...acc, item]; // верни все что накопил аккумулятор и верни следующую строку(которой нет в аккумуляторе)
    // }, []); // клади аккумулятор в массив
    // obj.keywords = result.join(" "); // соединяем все в одну строку и эту строку присваиваем как новое значение ключа keywords(потому что for'om пробежались по всем объектам data)

    // второй вариант решения function getUnicData(data) {
    //   const unicData = [];
    //   data.forEach((card) => {
    //     unicData.push({
    //       ...card,
    //       keywords: [...new Set(card.keywords.split(" "))].join(" "),
    //     });
    //   });
    //   return unicData;
    // }

    let result = new Set(obj.keywords.split(" "));
    let total = "";
    for (let n of result) {
      total = total + " " + n;
    }
    obj.keywords = total;
  }
}
getUniqueKeywords(data); // вызов даты поменял ключи
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
  let newArr = data.filter(
    (item) =>
      item.title.toLowerCase().includes(inputs.value.toLowerCase()) ||
      item.keywords.toLowerCase().includes(inputs.value.toLowerCase())
  );

  renderCards(newArr);
});

function renderCards(arr) {
  cards.innerHTML = "";
  arr.forEach((obj) => {
    cards.append(createCards(obj));
  });
}

renderCards(data);
