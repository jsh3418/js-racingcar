import { $ } from "../constants/DOM.js";

export const disabled = (element) => {
  element.disabled = true;
};

export const clearInput = (element) => {
  $(element).value = "";
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
