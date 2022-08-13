import { addCars } from "../model.js";
import { raceTimeTemplate } from "../view/raceTimeTemplate.js";
import { raceTimeEventListener } from "../eventListener/raceTimeEventListener.js";
import { $ } from "../constants/DOM.js";
import { CAR_NAME, ERROR_MESSAGE } from "../constants/constants.js";
import { clearInput, disabled } from "./utils.js";

export const handleCarNameSubmit = (event) => {
  event.preventDefault();

  const carNameInput = $("#car-name-input");
  const carNameSubmitButton = $("#car-name-submit-button");

  const carNames = carNameInput.value.split(",").map((value) => value.trim());

  if (!isValidCarNameLength(carNames)) {
    alert(ERROR_MESSAGE.CAR_NAME_TOO_LONG);
    clearInput(carNameInput);
    return;
  }
  if (!isEmptyCarName(carNames)) {
    alert(ERROR_MESSAGE.CAR_NAME_EMPTY);
    clearInput(carNameInput);
    return;
  }

  addCars(carNames);

  disabled(carNameInput);
  disabled(carNameSubmitButton);

  createRaceTimeSection();
};

const isValidCarNameLength = (cars) => {
  return cars.every((car) => car.length < CAR_NAME.MAX_LENGTH);
};

const isEmptyCarName = (cars) => {
  return cars.every((car) => car.length !== 0);
};

const createRaceTimeSection = () => {
  const userInputComponent = $("#user-input-component");

  const section = document.createElement("section");
  section.innerHTML = raceTimeTemplate;
  userInputComponent.appendChild(section);

  raceTimeEventListener();
};
