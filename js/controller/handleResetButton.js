import { resetTemplate } from "../view/resetTemplate.js";
import { init } from "../eventListener/init.js";
import { resetStore } from "../model.js";

export const handleResetButton = () => {
  const app = document.querySelector("#app");
  app.remove();

  const body = document.querySelector("body");
  const template = document.createElement("div");
  template.setAttribute("id", "app");
  template.innerHTML = resetTemplate;
  body.prepend(template);

  resetStore();
  init();
};