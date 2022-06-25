import { carName } from "./model.js";
import { raceTimeTemplate } from "./view/raceTimeTemplate.js";

const carNameInput = document.querySelector("#carNameInput");
const userInputComponent = document.querySelector("#user-input-component");
const carNameInputButton = document.querySelector("#carNameInputSubmitButton");

export const handleCarNameInput = (event) => {
  event.preventDefault();
  let carNameInputValue = carNameInput.value.split(",");
  carNameInputValue = carNameInputValue.map((item) => {
    return item.trim();
  });
  for (let item of carNameInputValue) {
    if (item.length > 5) {
      alert("5자 이하의 자동차 이름을 입력해주세요.");
      document.querySelector("#carNameInput").value = "";
      return;
    }
  }
  carName.name = carNameInputValue;
  carNameInput.disabled = true;
  carNameInputButton.disabled = true;

  const newSection = document.createElement("section");
  newSection.innerHTML = raceTimeTemplate;
  userInputComponent.appendChild(newSection);
};
