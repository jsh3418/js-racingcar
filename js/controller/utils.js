import { $ } from "../constants/DOM.js";

export const toggleDisabled = (element) => {
  element.disabled = !element.disabled;
};

export const clearInputValue = (element) => {
  $(element).value = "";
};
