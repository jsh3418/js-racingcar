import { store } from "../model.js";
import { winnerTemplate } from "../view/winnerTemplate.js";
import { resetButtonEventListener } from "../eventListener/resetButtonEventListener.js";
import { $ } from "../constants/DOM.js";

export const renderWinners = () => {
  const divApp = $("#app");
  const div = document.createElement("div");
  div.innerHTML = winnerTemplate(pickWinners());
  divApp.appendChild(div);

  resetButtonEventListener();
};

const pickWinners = () => {
  const winningPoints = Math.max(...store.cars.map((car) => car.point));

  const winners = store.cars
    .filter((car) => car.point === winningPoints)
    .map((car) => car.name);

  return winners;
};
