import { handleCarNameSubmit } from "./controller/handleCarNameInput.js";
import { $ } from "./DOM.js";

const initEventListener = () => {
  const carNameInput = $("#car-name-input");
  const carNameInputButton = $("#car-name-submit-button");
  carNameInput.addEventListener("submit", handleCarNameSubmit);
  carNameInputButton.addEventListener("click", handleCarNameSubmit);
};

export const initApp = () => {
  initEventListener();
};

initApp();
