import data from "/menu-data.json";

export default function menuHandler(type, itemID) {
  const selection = Object(data.menu[`${type}`]);
  // loops through the object array and finds the one that id matches itemID
  for (let i = 0; i < selection.length; i++) {
    if (selection[i].id === itemID) {
      // returns specified object
      return selection[i];
    }
  }
}
