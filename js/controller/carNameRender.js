import { gameInformationStore } from "../model.js";
import { gameProcesstemplate } from "../view/gameProcessTemplate.js";

export const carNameRender = () => {
  const divApp = document.querySelector("#app");

  const newDiv = document.createElement("div");

  newDiv.innerHTML = gameProcesstemplate(gameInformationStore.carName);
  divApp.appendChild(newDiv);
};
