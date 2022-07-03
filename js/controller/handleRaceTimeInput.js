import { store } from "../model.js";
import { startGame } from "./startGame.js";

export const handleRaceTimeInput = (event) => {
  event.preventDefault();
  const raceTimeInput = document.querySelector("#raceTimeInput");
  const raceTimeSubmitButton = document.querySelector("#raceTimeSubmitButton");

  let raceTime = raceTimeInput.value;
  if (raceTime <= 0 || raceTime === "") {
    alert("시도 횟수는 1이상 입력해야 합니다.");
    document.querySelector("#raceTimeInput").value = "";
    return;
  }
  if (raceTime.includes(".") === true) {
    alert("시도 횟수는 1이상인 정수로 입력해주세요.");
    document.querySelector("#raceTimeInput").value = "";
    return;
  }
  store.raceTime = raceTime;

  raceTimeInput.disabled = true;
  raceTimeSubmitButton.disabled = true;

  startGame();
};
