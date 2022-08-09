import { $ } from "../DOM.js";
import { store } from "../model.js";
import { gameProcessTemplate } from "../view/gameProcessTemplate.js";

export const carNameRender = () => {
  const divApp = $("#app");

  const newDiv = document.createElement("div");

  newDiv.innerHTML = gameProcessTemplate(store.players);
  divApp.appendChild(newDiv);
};
