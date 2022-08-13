import { $ } from "../constants/DOM.js";

export const toggleDisabled = (element) => {
  element.disabled = !element.disabled;
};

export const clearInputValue = (element) => {
  $(element).value = "";
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
