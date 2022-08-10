import { GAME } from "../constants/constants.js";
import { $, $$ } from "../constants/DOM.js";
import { store } from "../model.js";
import {
  forwardIconTemplate,
  spinnerIconTemplate,
} from "../view/gameProcessTemplate.js";

export const startGame = () => {
  const cars = store.players;
  cars.forEach((car) => {
    if (isEffectiveScore(getRandomNumber(GAME.MIN_SCORE, GAME.MAX_SCORE))) {
      car.point++;
      const $carWrap = $(`[data-id="${car.name}"]`);
      $carWrap.insertAdjacentHTML("afterend", forwardIconTemplate);
    }
  });
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEffectiveScore = (num) => {
  return num >= GAME.EFFECTIVE_SCORE;
};

export const paintSpinnerIcon = () => {
  const cars = $$(".car-player");
  for (let element of cars) {
    element.insertAdjacentHTML("afterend", spinnerIconTemplate);
  }
};

export const deleteSpinnerIcon = () => {
  const spinners = $$("#spinnerIcon");
  for (let element of spinners) {
    element.remove();
  }
};
