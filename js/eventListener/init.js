import { handleCarNameInput } from "../controller/handleCarNameInput.js";

const carNameInput = document.querySelector("#carNameInput");
const carNameInputButton = document.querySelector("#carNameInputSubmitButton");

const initEventListener = () => {
  carNameInput.addEventListener("submit", handleCarNameInput);
  carNameInputButton.addEventListener("click", handleCarNameInput);
};

export const init = () => {
  initEventListener();
};
