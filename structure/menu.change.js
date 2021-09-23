import Component from "/components/component.service.js";
import data from "/menu-data.json";
import { addContent } from "../load/layout";

// TODO add the .active class on the clicked button

function enableButtons() {
  const allButtons = document.querySelectorAll(".button");
  allButtons.forEach((button) => {
    button.addEventListener("click", changeMenu);
  });
}
// TODO assign .main class because contact.handle will change the class
function changeMenu() {
  const selection = this.textContent.toLowerCase();
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
function resetDOM() {
  const main = document.querySelector(".main");
  while (main.hasChildNodes()) {
    main.removeChild(main.lastChild);
  }
}
export { enableButtons, changeMenu, resetDOM };
