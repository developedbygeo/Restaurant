import { create } from "../load/layout.js";

export default class Component {
  #id;
  static count = 0;
  constructor(name, description, price) {
    this.#id = Component.count++;
    this.img = `img-${this.id}`;
    this.name = name;
    this.description = description;
    this.price = price;
  }
  get keys() {
    return Object.keys(this);
  }
  get id() {
    return this.#id;
  }
  render() {
    const main = document.querySelector(".main");
    const parentElement = create("div", `menu-item${this.id}`, "menu-item");
    // creates wrapper divs and div content and appends to main
    this.keys.forEach((key) => {
      let tag = "p";
      let wrapper = create("div", `${key}-wrapper`, "wrapper");
      if (key === "img") tag = "img";
      if (key === "name") tag = "h1";
      let content = wrapper.appendChild(create(`${tag}`, `${key}-${tag}`));
      parentElement.appendChild(content);
    });
    main.appendChild(parentElement);
  }
  //  TODO create the populate method for the actual content
  populate() {}
}
