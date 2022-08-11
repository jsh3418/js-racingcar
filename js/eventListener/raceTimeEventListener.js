import { handleRaceTimeSubmit } from "../controller/handleRaceTimeSubmit.js";
import { $ } from "../constants/DOM.js";

export const raceTimeEventListener = () => {
  const raceTimeSubmitButton = $("#race-time-submit-button");
  const raceTimeInput = $("#race-time-input");

  raceTimeSubmitButton.addEventListener("click", handleRaceTimeSubmit);
  raceTimeInput.addEventListener("submit", handleRaceTimeSubmit);
};
