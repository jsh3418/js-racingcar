import { savePlayers } from "../model.js";
import { raceTimeTemplate } from "../view/raceTimeTemplate.js";
import { raceTimeEventListener } from "../eventListener/raceTimeEventListener.js";
import { $ } from "../constants/DOM.js";

export const handleCarNameSubmit = (event) => {
  event.preventDefault();

  const carNameInput = $("#car-name-input");
  const carNameSubmitButton = $("#car-name-submit-button");

  const carNames = carNameInput.value.split(",").map((value) => value.trim());

  for (let item of carNames) {
    if (item.length > 5) {
      alert("5자 이하의 자동차 이름을 입력해주세요.");
      $("#car-name-input").value = "";
      return;
    }
  }

  carNames.forEach((item) => {
    savePlayers(item);
  });

  carNameInput.disabled = true;
  carNameSubmitButton.disabled = true;

  createRaceTimeInput();
};

const createRaceTimeInput = () => {
  const userInputComponent = $("#user-input-component");

  const section = document.createElement("section");
  section.innerHTML = raceTimeTemplate;
  userInputComponent.appendChild(section);

  raceTimeEventListener();
};
