import { ERROR_MESSAGE, GAME } from "../constants/constants.js";
import { $ } from "../constants/DOM.js";
import { store } from "../model.js";
import { startGame } from "./startGame.js";
import { clearInputValue, toggleDisabled } from "./utils.js";

export const handleRaceTimeSubmit = (event) => {
  event.preventDefault();

  const raceTimeInput = $("#race-time-input");
  const raceTimeSubmitButton = $("#race-time-submit-button");

  const raceTime = Math.floor(Number(raceTimeInput.value));

  if (!isValidRaceTime) {
    alert(ERROR_MESSAGE.RACE_TIME_CANNOT_BE_ZERO);
    clearInputValue("#race-time-input");
    return;
  }
  store.raceTime = raceTime;

  toggleDisabled(raceTimeInput);
  toggleDisabled(raceTimeSubmitButton);

  startGame();
};

const isValidRaceTime = (raceTime) => {
  return raceTime > 0;
};
