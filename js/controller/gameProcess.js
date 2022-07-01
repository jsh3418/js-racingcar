import { gameInformationStore } from "../model.js";
import { forwardIconTemplate } from "../view/gameProcessTemplate.js";

export const gameProcess = () => {
  for (let i in gameInformationStore.car) {
    const randomInteger = Math.floor(Math.random() * 10);
    if (randomInteger >= 4) {
      const cars = document.querySelectorAll(".car-player");
      cars[i].insertAdjacentHTML("afterend", forwardIconTemplate);
    }
  }
};
