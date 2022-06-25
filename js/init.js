import { handleCarNameInput, handleRaceTimeInput } from "./controller.js";

const carNameInput = document.querySelector("#carNameInput");
const carNameInputButton = document.querySelector("#carNameInputSubmitButton");

const initEventListener = () => {
  carNameInput.addEventListener("submit", handleCarNameInput);
  carNameInputButton.addEventListener("click", handleCarNameInput);
};

export const raceTimeEventListener = () => {
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");
  const raceTimeInput = document.querySelector("#raceTimeInput");

  raceTimeSubmitButton.addEventListener("click", handleRaceTimeInput);
  raceTimeInput.addEventListener("submit", handleRaceTimeInput);
};

export const init = () => {
  initEventListener();
};
