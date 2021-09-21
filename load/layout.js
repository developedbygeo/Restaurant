export default function layout() {
  // adjust the header's content
  const header = document.querySelector("header");
  const titleWrapper = elementCreator("div", "logo-wrapper");
  const title = elementCreator("h1", "logo");
  const nav = elementCreator("nav", "button-wrapper");
  // logo settings
  title.textContent = `Di Giorgio's`;
  titleWrapper.appendChild(title);
  header.appendChild(titleWrapper);
  // nav
  header.appendChild(nav);
  //   buttons
  buttonGenerator();
}

// TODO I may want to export this later on
function elementCreator(el, elClass, elClass2 = elClass) {
  const elClassArray = [elClass, elClass2];
  const element = document.createElement(`${el}`);
  element.classList.add(...elClassArray);
  return element;
}
function buttonGenerator() {
  const nav = document.querySelector(".button-wrapper");
  const text = ["Starters", `Light & Tasty`, "Grilled Mains", "Wines"];
  for (let i = 0; i < 4; i++) {
    const button = elementCreator("button", `button${i}`, "button");
    button.textContent = text[i];
    nav.appendChild(button);
  }
}
