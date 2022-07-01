import { gameInformationStore } from "../model.js";
import { winnerTemplate } from "../view/winnerTemplate.js";

export const renderWinner = () => {
  let winner;
  let temp = 0;
  for (let i in gameInformationStore.car) {
    if (temp < gameInformationStore.car[i].point) {
      winner = gameInformationStore.car[i].name;
    } else if (temp === gameInformationStore.car[i].point) {
      winner += `, ${gameInformationStore.car[i].name}`;
    }
  }

  const divApp = document.querySelector("#app");
  const div = document.createElement("div");
  div.innerHTML = winnerTemplate(winner);
  divApp.appendChild(div);
};
