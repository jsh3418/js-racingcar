import { gameInformationStore } from "../model.js";
import { carNameRender } from "./carNameRender.js";

import {
  randomGoStop,
  paintSpinnerIcon,
  deleteSpinnerIcon,
} from "./gameProcess.js";

export const handleRaceTimeInput = (event) => {
  event.preventDefault();
  const raceTimeInput = document.querySelector("#raceTimeInput");
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");

  gameInformationStore.raceTime = Number(raceTimeInput.value);

  raceTimeInput.disabled = true;
  raceTimeSubmitButton.disabled = true;

  carNameRender();
  paintSpinnerIcon();

  const raceInterval = setInterval(() => {
    randomGoStop();
    gameInformationStore.raceTime--;
    if (gameInformationStore.raceTime === 0) {
      clearInterval(raceInterval);
      deleteSpinnerIcon();
    }
  }, 2000);
};
