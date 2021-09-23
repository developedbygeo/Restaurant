import { init, initializeContent } from "../load/init";
import headerLayout from "../load/layout.js";
import { enableButtons } from "/structure/menu.change.js";
import enableContactButton from "/structure/contact.handle.js";

init();
headerLayout();
enableButtons();
initializeContent();
enableContactButton();
