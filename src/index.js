import { init, initializeContent } from "../load/init";
import headerLayout from "../load/layout.js";
import { createFooter } from "../load/layout.js";
import { enableButtons } from "/structure/menu.change.js";
import { enableLogoClick } from "/structure/menu.change.js";
import "../styles/style.scss";

init();
headerLayout();
createFooter();
enableButtons();
enableLogoClick();
initializeContent();
