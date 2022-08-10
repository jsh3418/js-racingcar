import { resetTemplate } from "../view/resetTemplate.js";
import { initApp } from "../index.js";
import { resetStore } from "../model.js";
import { $ } from "../constants/DOM.js";

export const handleResetButton = () => {
  const app = $("#app");
  app.remove();

  const body = $("body");
  const template = document.createElement("div");
  template.setAttribute("id", "app");
  template.innerHTML = resetTemplate;
  body.prepend(template);

  resetStore();
  initApp();
};
