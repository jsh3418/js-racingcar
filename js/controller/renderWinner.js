import { store } from "../model.js";
import { winnerTemplate } from "../view/winnerTemplate.js";

export const renderWinner = () => {
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

  const divApp = document.querySelector("#app");
  const div = document.createElement("div");
  div.innerHTML = winnerTemplate(winner);
  divApp.appendChild(div);
};
