import { handleCarNameSubmit } from "./controller/handleCarNameInput.js";
import { $ } from "./constants/DOM.js";

const initEventListener = () => {
  const form = $("#car-name-submit");
  form.addEventListener("submit", handleCarNameSubmit);
};

export const initApp = () => {
  initEventListener();
};

initApp();
