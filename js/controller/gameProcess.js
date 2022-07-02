import { store } from "../model.js";
import {
  forwardIconTemplate,
  spinnerIconTemplate,
} from "../view/gameProcessTemplate.js";
import { winnerMessage } from "../view/winnerTemplate.js";

export const randomGoStop = () => {
  for (let i in store.players) {
    const randomInteger = Math.floor(Math.random() * 10);
    if (randomInteger >= 4) {
      const cars = document.querySelectorAll(".car-player");
      cars[i].insertAdjacentHTML("afterend", forwardIconTemplate);
      store.players[i].point++;
    }
  }
};

export const paintSpinnerIcon = () => {
  const cars = document.querySelectorAll(".car-player");
  for (let element of cars) {
    element.insertAdjacentHTML("afterend", spinnerIconTemplate);
  }
};

export const deleteSpinnerIcon = () => {
  const spinners = document.querySelectorAll("#spinnerIcon");
  for (let element of spinners) {
    element.remove();
  }
};
