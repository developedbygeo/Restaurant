import init from "../load/init";
import headerLayout from "../load/layout.js";
import { addContent } from "../load/layout.js";
import menuHandler from "/structure/body.structure.js";
import Component from "/components/component.service.js";
import data from "/menu-data.json";

init();
headerLayout();

const { starters, light, grilled, wine } = data.menu;
starters.forEach((starter) => {
  const { name, price, description, id } = starter;
  const newMenuItem = new Component(name, price, description, id, "starters");
  newMenuItem.render();
});
addContent("starters");
