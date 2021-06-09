import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import MenuOptions from "./components/MenuOptions";

//The new Set function isolates for unique values
//Prevents repeating categories from being displayed
const allCategories = [
  "All",
  ...new Set(MenuOptions.map((options) => options.category)),
];

//Sorts the menu options alphabetically by name
//If console log, you can see the ids in different order
MenuOptions.sort(function (a, b) {
  let itemA = a.title.toUpperCase();
  let itemB = b.title.toUpperCase();

  if (itemA < itemB) {
    return -1;
  }
  if (itemA > itemB) {
    return 1;
  }
  return 0;
});

function App() {
  const [menu, setMenu] = useState(MenuOptions);
  const [categories, setCategories] = useState(allCategories);

  console.log(menu);

  const filtering = (category) => {
    if (category === "All") {
      setMenu(MenuOptions);
      return;
    }

    let newMenu = MenuOptions.filter(
      (options) => options.category === category
    );
    setMenu(newMenu);
  };

  return (
    <div>
      <Categories categories={categories} filtering={filtering} />
      <Menu menus={menu} />
    </div>
  );
}

export default App;
