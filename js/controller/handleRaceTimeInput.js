import { store } from "../model.js";
import { carNameRender } from "./carNameRender.js";
import { renderWinner } from "./renderWinner.js";
import {
  randomGoStop,
  paintSpinnerIcon,
  deleteSpinnerIcon,
} from "./gameProcess.js";

export const handleRaceTimeInput = (event) => {
  event.preventDefault();
  const raceTimeInput = document.querySelector("#raceTimeInput");
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");

  store.raceTime = Number(raceTimeInput.value);

  raceTimeInput.disabled = true;
  raceTimeSubmitButton.disabled = true;

  carNameRender();
  paintSpinnerIcon();

  const raceInterval = setInterval(() => {
    randomGoStop();
    store.raceTime--;
    if (store.raceTime === 0) {
      clearInterval(raceInterval);
      deleteSpinnerIcon();
      renderWinner();
    }
  }, 2000);
};
