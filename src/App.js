import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CovidMessage from "./components/CovidMessage";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import MenuOptions from "./components/MenuOptions";
import Footer from "./components/Footer";
//The new Set function isolates for unique values
//Prevents repeating categories from being displayed
const allCategories = [
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
  // const [categories, setCategories] = useState(allCategories);
  const categories = allCategories;
  const [selected, setSelected] = useState("Temporary Limited Menu");

  const fullMenu = () => {
    setMenu(MenuOptions);
    setSelected("Temporary Limited Menu");
  };

  const filtering = (category) => {
    if (category === "All") {
      setMenu(MenuOptions);
      setSelected("Temporary Limited Menu");
      return;
    }

    let newMenu = MenuOptions.filter(
      (options) => options.category === category
    );
    setMenu(newMenu);
    setSelected(category);
  };

  return (
    <div>
      <Navbar />

      <CovidMessage />
      <div className="container">
        <div className="container-categories">
          <Categories
            categories={categories}
            filtering={filtering}
            fullMenu={fullMenu}
            selected={selected}
            menuOptions={MenuOptions}
          />
        </div>
        <div className="container-menu">
          <Menu selected={selected} menus={menu} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
