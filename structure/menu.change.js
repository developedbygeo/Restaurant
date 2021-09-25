import Component from "/components/component.service.js";
import data from "/menu-data.json";
import { addContent } from "../load/layout";
import { initializeContent } from "../load/init";
import { createContactPage } from "./contact.handle";

// enables the navigation buttons for both menu and contact
function enableButtons() {
  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttonClassHandler(e);
      if (button.textContent === "Contact") {
        createContactPage();
      } else {
        correctMainClass();
        changeMenu(e);
      }
    });
  });
}
// clears the DOM, creates new objects and renders them
function changeMenu(e) {
  const selection = e.target.textContent.toLowerCase();
  const selectedObject = data.menu[`${selection}`];
  Component.resetCount();
  resetDOM();
  selectedObject.forEach((item) => {
    const { name, price, description, id } = item;
    const newMenuItem = new Component(
      name,
      price,
      description,
      id,
      `${selection}`
    );
    newMenuItem.render();
  });
  addContent(`${selection}`);
}
// removes every main child
function resetDOM() {
  const main = document.querySelector(".main");
  while (main.hasChildNodes()) {
    main.removeChild(main.lastChild);
  }
}
// logo click generates the starters menu
function enableLogoClick() {
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", initializeContent);
}
// handles the class toggling for menu buttons
function buttonClassHandler(e) {
  const allButtons = document.querySelectorAll(".btn");
  const currentClass = e.target.classList[1];
  e.target.classList.add(`${currentClass}-active`);
  allButtons.forEach((button) => {
    if (button != e.target && e.target.textContent !== "Contact") {
      button.classList.remove("contact-active");
      button.classList.remove(`${currentClass}-active`);
    }
    if (e.target.textContent === "Contact") {
      button.classList.remove("button-active");
    }
  });
}
function correctMainClass() {
  const main = document.querySelector(".main");
  main.classList.remove("main-contact");
}
export {
  enableButtons,
  changeMenu,
  resetDOM,
  enableLogoClick,
  buttonClassHandler,
  correctMainClass,
};
