import { resetDOM } from "./menu.change.js";
import contactData from "/contact-data.json";
import { create } from "../load/layout";
import { reRenderContactPage } from "../load/init";

// renders the contact page & content
function createContactPage() {
  const main = document.querySelector(".main");
  const { phone, address, email } = contactData.data;
  const elementKeys = Object.keys(contactData.data);
  main.classList.add("main-contact");
  resetDOM();
  main.appendChild(create("div", "map-wrapper"));
  elementKeys.forEach((key) => {
    const bigWrapper = main.appendChild(
      create("div", "info-wrapper", `${key}-big`)
    );
    const keyWrapper = bigWrapper.appendChild(
      create("div", "key-wrapper", `${key}-wrapper`)
    );
    const dataWrapper = bigWrapper.appendChild(
      create("div", "data-wrapper", `${key}-data`)
    );
    const keyTitle = keyWrapper.appendChild(
      create("p", `${key}-element`, "element-title")
    );
    const keyData = dataWrapper.appendChild(
      create("p", `${key}-data`, "element-data")
    );
    keyTitle.textContent = key;
    keyData.textContent =
      key === "phone" ? phone : key === "address" ? address : email;
  });
  reRenderContactPage();
  populateContactMap();
}
// populates the contact page with the map img
function populateContactMap() {
  const mapWrapper = document.querySelector(".map-wrapper");
  const img = mapWrapper.appendChild(create("img", "map-img"));
  img.setAttribute("src", "/src/img/map/location-img.JPG");
}
export { createContactPage };
