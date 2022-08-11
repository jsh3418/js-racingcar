import { store } from "../model.js";
import { renderWinner } from "./renderWinner.js";
import {
  gameProcess,
  paintSpinnerIcon,
  deleteSpinnerIcon,
} from "./gameProcess.js";
import { winnerMessage } from "../view/winnerTemplate.js";
import { $ } from "../constants/DOM.js";
import { gameProcessTemplate } from "../view/gameProcessTemplate.js";

export const startGame = () => {
  carNameRender();
  paintSpinnerIcon();

  const raceInterval = setInterval(() => {
    gameProcess();
    store.raceTime--;
    if (store.raceTime === 0) {
      clearInterval(raceInterval);
      deleteSpinnerIcon();
      renderWinner();
      setTimeout(winnerMessage, 2000);
    }
  }, 1000);
};

export const carNameRender = () => {
  const app = $("#app");
  const div = document.createElement("div");

  div.innerHTML = gameProcessTemplate(store.players);
  app.appendChild(div);
};
