import menuHandler from "/structure/menu.handle.js";

// creates the header layout structure
export default function headerLayout() {
  // adjust the header's content
  const header = document.querySelector("header");
  const titleWrapper = elementCreator("div", "logo-wrapper");
  const title = elementCreator("h1", "logo");
  const nav = elementCreator("nav", "button-wrapper");
  // logo settings
  title.innerHTML = `<span class="color-a">Di</span> <span class="color-b">Gior</span><span class="color-c">gio</span>`;
  titleWrapper.appendChild(title);
  header.appendChild(titleWrapper);
  // nav
  header.appendChild(nav);
  //   buttons
  buttonGenerator();
}
// creates elements
function elementCreator(
  el,
  elClass,
  elClass2 = elClass,
  elClass3 = elClass,
  elClass4 = elClass
) {
  const elClassArray = [elClass, elClass2, elClass3, elClass4];
  const element = document.createElement(`${el}`);
  element.classList.add(...elClassArray);
  return element;
}
// generates the nav buttons
function buttonGenerator() {
  const nav = document.querySelector(".button-wrapper");
  const text = ["Starters", `Light`, "Grilled", "Wines", "Contact"];
  for (let i = 0; i < text.length; i++) {
    const button = elementCreator(
      "button",
      `button${i}`,
      "button",
      "button-active"
    );
    button.textContent = text[i];
    if (text[i] === "Contact") {
      button.setAttribute("class", "contact contact-active");
    }
    nav.appendChild(button);
  }
}
// adds content
function addContent(category) {
  const elementList = document.querySelectorAll(`.${category}`);
  elementList.forEach((element) => {
    // getting identifier from each parent element (eg: starters-chicken -> chicken)
    const identifier = element.classList[2].substring(
      element.classList[2].indexOf("-") + 1
    );
    const categoryIdentifier = element.classList[3];
    const targetedObject = menuHandler(
      `${categoryIdentifier}`,
      `${identifier}`
    );
    // image handling
    const imgElement = element.children[0].children[0];
    const img = `/src/img/${category}/${`${identifier}`}.jpg`;
    imgElement.setAttribute("src", img);
    // h2 handling
    element.children[1].children[0].textContent = targetedObject.name;
    // // desc handling
    element.children[2].children[0].textContent = targetedObject.description;
    // // price handling
    element.children[3].children[0].textContent = `$${targetedObject.price}`;
  });
}
export { elementCreator as create, addContent };
