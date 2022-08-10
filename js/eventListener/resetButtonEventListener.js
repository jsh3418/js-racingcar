import { handleResetButton } from "../controller/handleResetButton.js";
import { $ } from "../constants/DOM.js";

export const resetButtonEventListener = () => {
  const resetButton = $("#reset-button");
  resetButton.addEventListener("click", handleResetButton);
};
