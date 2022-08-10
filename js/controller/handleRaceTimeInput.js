import { $ } from "../constants/DOM.js";
import { store } from "../model.js";
import { startGame } from "./startGame.js";

export const handleRaceTimeSubmit = (event) => {
  event.preventDefault();
  const raceTimeInput = $("#race-time-input");
  const raceTimeSubmitButton = $("#race-time-submit-button");

  let raceTime = raceTimeInput.value;
  if (raceTime <= 0 || raceTime === "") {
    alert("시도 횟수는 1이상 입력해야 합니다.");
    $("#race-time-input").value = "";
    return;
  }
  if (raceTime.includes(".") === true) {
    alert("시도 횟수는 1이상인 정수로 입력해주세요.");
    $("#race-time-input").value = "";
    return;
  }
  store.raceTime = raceTime;

  raceTimeInput.disabled = true;
  raceTimeSubmitButton.disabled = true;

  startGame();
};
