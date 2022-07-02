import { store } from "../model.js";
import { startGame } from "./startGame.js";

export const handleRaceTimeInput = (event) => {
  event.preventDefault();
  const raceTimeInput = document.querySelector("#raceTimeInput");
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");

  store.raceTime = parseInt(raceTimeInput.value, 10);
  if (store.raceTime <= 0) {
    alert("시도 횟수는 1이상 입력해야 합니다.");
    document.querySelector("#raceTimeInput").value = "";
    return;
  }

  raceTimeInput.disabled = true;
  raceTimeSubmitButton.disabled = true;

  startGame();
};
