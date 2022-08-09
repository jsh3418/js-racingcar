import { handleRaceTimeInput } from "../controller/handleRaceTimeInput.js";
import { $ } from "../DOM.js";

export const raceTimeEventListener = () => {
  const raceTimeSubmitButton = $("#race-time-submit-button");
  const raceTimeInput = $("#race-time-input");

  raceTimeSubmitButton.addEventListener("click", handleRaceTimeInput);
  raceTimeInput.addEventListener("submit", handleRaceTimeInput);
};
