import { savePlayers } from "../model.js";
import { raceTimeTemplate } from "../view/raceTimeTemplate.js";
import { raceTimeEventListener } from "../eventListener/raceTimeEventListener.js";

export const handleCarNameInput = (event) => {
  event.preventDefault();

  const carNameInput = document.querySelector("#carNameInput");
  const carNameInputButton = document.querySelector(
    "#carNameInputSubmitButton"
  );

  const carNameInputValue = carNameInput.value
    .split(",")
    .map((value) => value.trim());

  for (let item of carNameInputValue) {
    if (item.length > 5) {
      alert("5자 이하의 자동차 이름을 입력해주세요.");
      document.querySelector("#carNameInput").value = "";
      return;
    }
  }

  carNameInputValue.forEach((item) => {
    savePlayers(item);
  });

  carNameInput.disabled = true;
  carNameInputButton.disabled = true;

  createRaceTimeInput();
};

const createRaceTimeInput = () => {
  const userInputComponent = document.querySelector("#user-input-component");

  const section = document.createElement("section");
  section.innerHTML = raceTimeTemplate;
  userInputComponent.appendChild(section);

  raceTimeEventListener();
};
