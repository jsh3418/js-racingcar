import { handleResetButton } from "../controller/handleResetButton.js";

export const resetButtonEventListener = () => {
  const resetButton = document.querySelector("#resetButton");
  resetButton.addEventListener("click", handleResetButton);
};
