import { handleResetButton } from "../controller/handleResetButton.js";

export const resetButtonEventListener = () => {
  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", handleResetButton);
};
