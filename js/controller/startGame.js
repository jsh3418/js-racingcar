import { store } from "../model.js";
import { renderWinners } from "./renderWinner.js";
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
  renderCarName();
  paintSpinnerIcon();

  const raceInterval = setInterval(() => {
    gameProcess();
    store.raceTime--;
    if (store.raceTime === 0) {
      clearInterval(raceInterval);
      deleteSpinnerIcon();
      renderWinners();
      setTimeout(winnerMessage, 2000);
    }
  }, 1000);
};

const renderCarName = () => {
  const app = $("#app");
  const div = document.createElement("div");
  div.innerHTML = gameProcessTemplate(store.cars);
  app.appendChild(div);
};

const gameProcess = () => {
  const cars = store.cars;
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
  const cars = $$(".car-player");
  cars.forEach((car) => {
    car.insertAdjacentHTML("afterend", spinnerIconTemplate);
  });
};

const deleteSpinnerIcon = () => {
  const spinners = $$("#spinnerIcon");
  spinners.forEach((spinner) => {
    spinner.remove();
  });
};
