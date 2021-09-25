import data from "/menu-data.json";
import Component from "/components/component.service.js";
import { addContent } from "../load/layout.js";
import { resetDOM, correctMainClass } from "../structure/menu.change";

function initPage() {
  const main = document.querySelector("main");
  main.classList.add("main");
}
function initializeContent() {
  const startersBtn = document.querySelector(".button0");
  const allBtns = document.querySelectorAll(".btn");
  const ctcBtn = document.querySelector(".contact");
  resetDOM();
  correctMainClass();
  Component.resetCount();
  const { starters } = data.menu;
  starters.forEach((starter) => {
    const { name, price, description, id } = starter;
    const newMenuItem = new Component(name, price, description, id, "starters");
    newMenuItem.render();
  });
  allBtns.forEach((button) => button.classList.remove("button-active"));
  ctcBtn.classList.remove("contact-active");
  console.log(allBtns);
  startersBtn.classList.add("button-active");
  addContent("starters");
}
export { initPage as init, initializeContent };
