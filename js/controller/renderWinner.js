import { store } from "../model.js";
import { winnerTemplate } from "../view/winnerTemplate.js";
import { resetButtonEventListener } from "../eventListener/resetButtonEventListener.js";
import { $ } from "../constants/DOM.js";

export const renderWinner = () => {
  const divApp = $("#app");
  const div = document.createElement("div");
  div.innerHTML = winnerTemplate(pickWinners());
  divApp.appendChild(div);

  resetButtonEventListener();
};

const pickWinners = () => {
  const winningPoints = Math.max(
    ...store.players.map((player) => player.point)
  );

  const winners = store.players
    .filter((player) => player.point === winningPoints)
    .map((player) => player.name);

  return winners;
};
