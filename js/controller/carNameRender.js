import { store } from "../model.js";
import { gameProcesstemplate } from "../view/gameProcessTemplate.js";

export const carNameRender = () => {
  const divApp = document.querySelector("#app");

  const newDiv = document.createElement("div");

  newDiv.innerHTML = gameProcesstemplate(store.players);
  divApp.appendChild(newDiv);
};
