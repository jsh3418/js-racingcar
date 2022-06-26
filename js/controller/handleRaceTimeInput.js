import { gameInformationStore } from "../model.js";
import { carNameRender } from "./carNameRender.js";

export const handleRaceTimeInput = (event) => {
  event.preventDefault();
  const raceTimeInput = document.querySelector("#raceTimeInput");
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");

  gameInformationStore.raceTime = Number(raceTimeInput.value);

  raceTimeInput.disabled = true;
  raceTimeSubmitButton.disabled = true;

  carNameRender();
};
