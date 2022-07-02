import { handleRaceTimeInput } from "../controller/handleRaceTimeInput.js";

export const raceTimeEventListener = () => {
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");
  const raceTimeInput = document.querySelector("#raceTimeInput");

  raceTimeSubmitButton.addEventListener("click", handleRaceTimeInput);
  raceTimeInput.addEventListener("submit", handleRaceTimeInput);
};
