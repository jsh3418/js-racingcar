import { store } from "../model.js";
import { renderWinner } from "./renderWinner.js";
import { winnerMessage } from "../view/winnerTemplate.js";
import { $, $$ } from "../constants/DOM.js";
import {
  forwardIconTemplate,
  gameProcessTemplate,
  spinnerIconTemplate,
} from "../view/gameProcessTemplate.js";
import { getRandomNumber } from "./utils.js";
import { GAME } from "../constants/constants.js";

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

const carNameRender = () => {
  const app = $("#app");
  const div = document.createElement("div");

  div.innerHTML = gameProcessTemplate(store.players);
  app.appendChild(div);
};

const gameProcess = () => {
  const cars = store.players;
  cars.forEach((car) => {
    if (isEffectiveScore(getRandomNumber(GAME.MIN_SCORE, GAME.MAX_SCORE))) {
      car.point++;
      const $carWrap = $(`[data-id="${car.name}"]`);
      $carWrap.insertAdjacentHTML("afterend", forwardIconTemplate);
    }
  });
};

const isEffectiveScore = (num) => {
  return num >= GAME.EFFECTIVE_SCORE;
};

const paintSpinnerIcon = () => {
  const players = $$(".car-player");
  players.forEach((player) => {
    player.insertAdjacentHTML("afterend", spinnerIconTemplate);
  });
};

const deleteSpinnerIcon = () => {
  const spinners = $$("#spinnerIcon");
  spinners.forEach((spinner) => {
    spinner.remove();
  });
};
