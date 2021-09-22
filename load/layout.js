export default function headerLayout() {
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
function buttonGenerator() {
  const nav = document.querySelector(".button-wrapper");
  const text = ["Starters", `Light`, "Grilled", "Wines", "Contact"];
  for (let i = 0; i < text.length; i++) {
    const button = elementCreator("button", `button${i}`, "button");
    button.textContent = text[i];
    nav.appendChild(button);
  }
}
function addContent(category) {
  const elementList = document.querySelectorAll(`.${category}`);
  console.log(elementList);
  elementList.forEach((element) => {
    // getting identifier from each parent element (eg: starters-chicken -> chicken)
    const identifier = element.classList[2].substring(
      element.classList[2].indexOf("-") + 1
    );
    const imgHTML = element.children[0];
    // const img = require(`/src/img/${category}/${`${identifier}`}.jpg`);
    const img = `/src/img/${category}/${`${identifier}`}.jpg`;

    // img handling
    imgHTML.style.backgroundImage = `url(${img})`;

    // h2 handling
    element.children[1].textContent = "Yo";
    // desc handling
    element.children[2].textContent = "Free";
    // price handling
    element.children[3].textContent = "$5";
  });

  // const target = `${category}-${identifier}`;
  // const htmlImage = document.querySelector(`${target} img`);
  // const htmlTitle = document.querySelector(`${target} h2`);
  // const htmlDesc = document.querySelector(`${target} p`);
  // const htmlPrice = document.querySelector(`${target} span`);
}
export { elementCreator as create, addContent };
