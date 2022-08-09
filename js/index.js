import { handleCarNameInput } from "./controller/handleCarNameInput.js";

const initEventListener = () => {
  const carNameInput = document.querySelector("#carNameInput");
  const carNameInputButton = document.querySelector(
    "#carNameInputSubmitButton"
  );
  carNameInput.addEventListener("submit", handleCarNameInput);
  carNameInputButton.addEventListener("click", handleCarNameInput);
};

export const initApp = () => {
  initEventListener();
};

initApp();
