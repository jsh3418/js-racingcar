import { store } from "../model.js";
import { carNameRender } from "./carNameRender.js";
import { renderWinner } from "./renderWinner.js";
import {
  startGame,
  paintSpinnerIcon,
  deleteSpinnerIcon,
} from "./gameProcess.js";
import { winnerMessage } from "../view/winnerTemplate.js";

export const startGame = () => {
  carNameRender();
  paintSpinnerIcon();

  const raceInterval = setInterval(() => {
    startGame();
    store.raceTime--;
    if (store.raceTime === 0) {
      clearInterval(raceInterval);
      deleteSpinnerIcon();
      renderWinner();
      setTimeout(winnerMessage, 2000);
    }
  }, 1000);
};
