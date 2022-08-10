import { store } from "../model.js";
import { winnerTemplate } from "../view/winnerTemplate.js";
import { resetButtonEventListener } from "../eventListener/resetButtonEventListener.js";
import { $ } from "../constants/DOM.js";

export const renderWinner = () => {
  const divApp = $("#app");
  const div = document.createElement("div");
  div.innerHTML = winnerTemplate(pickWinner());
  divApp.appendChild(div);

  resetButtonEventListener();
};

const pickWinner = () => {
  let winner;
  let temp = 0;
  for (let i in store.players) {
    if (temp < store.players[i].point) {
      winner = store.players[i].name;
      temp = store.players[i].point;
    } else if (temp === store.players[i].point) {
      winner += `, ${store.players[i].name}`;
    }
  }
  return winner;
};
