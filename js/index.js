import { handleCarNameInput } from "./controller/handleCarNameInput.js";
import { $ } from "./DOM.js";

const initEventListener = () => {
  const carNameInput = $("#car-name-input");
  const carNameInputButton = $("#car-name-submit-button");
  carNameInput.addEventListener("submit", handleCarNameInput);
  carNameInputButton.addEventListener("click", handleCarNameInput);
};

export const initApp = () => {
  initEventListener();
};

initApp();
