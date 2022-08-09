import { handleCarNameInput } from "./controller/handleCarNameInput.js";

const initEventListener = () => {
  const carNameInput = document.querySelector("#car-name-input");
  const carNameInputButton = document.querySelector(
    "#car-name-input-submit-button"
  );
  carNameInput.addEventListener("submit", handleCarNameInput);
  carNameInputButton.addEventListener("click", handleCarNameInput);
};

export const initApp = () => {
  initEventListener();
};

initApp();
