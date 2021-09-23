import { create } from "../load/layout.js";

export default class Component {
  // setting id, category & identifier as private because they should be non-enumerable
  #id;
  #category;
  #identifier;
  static count = 0;
  constructor(name, price, description, identifier, category) {
    this.#id = Component.count++;
    this.img = "";
    this.name = name;
    this.description = description;
    this.price = price;
    this.#category = category.toLowerCase();
    this.#identifier = identifier;
  }
  static resetCount() {
    Component.count = 0;
  }
  get keys() {
    return Object.keys(this);
  }
  get id() {
    return this.#id;
  }
  get category() {
    return this.#category;
  }
  get identifier() {
    return this.#identifier;
  }
  render() {
    const main = document.querySelector(".main");
    const parentElement = create(
      "div",
      `menu-item-${this.id}`,
      "menu-item",
      `${this.category}-${this.identifier}`,
      `${this.category}`
    );
    // creates wrapper divs and div content and appends to main
    this.keys.forEach((key) => {
      let tag;
      if (key === "img") tag = "img";
      if (key === "name") tag = "h2";
      if (key === "description") tag = "p";
      if (key === "price") tag = "span";
      const content = create(`${tag}`, `${key}`);
      const elementWrapper = create("div", `${tag}-wrapper`, `${key}`);
      elementWrapper.appendChild(content);
      parentElement.appendChild(elementWrapper);
    });
    main.appendChild(parentElement);
  }
}
