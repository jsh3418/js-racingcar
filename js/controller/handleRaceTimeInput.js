import { store } from "../model.js";
import { startGame } from "./startGame.js";

export const handleRaceTimeInput = (event) => {
  event.preventDefault();
  const raceTimeInput = document.querySelector("#raceTimeInput");
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");

  store.raceTime = parseInt(raceTimeInput.value, 10);

  raceTimeInput.disabled = true;
  raceTimeSubmitButton.disabled = true;

  startGame();
};
