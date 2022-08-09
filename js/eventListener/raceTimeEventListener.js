import { handleRaceTimeInput } from "../controller/handleRaceTimeInput.js";

export const raceTimeEventListener = () => {
  const raceTimeSubmitButton = document.querySelector(
    "#race-time-submit-button"
  );
  const raceTimeInput = document.querySelector("#race-time-input");

  raceTimeSubmitButton.addEventListener("click", handleRaceTimeInput);
  raceTimeInput.addEventListener("submit", handleRaceTimeInput);
};
