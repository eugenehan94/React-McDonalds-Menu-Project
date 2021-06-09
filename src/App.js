import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import MenuOptions from "./components/MenuOptions";

function App() {
  const [menu, setMenu] = useState([MenuOptions]);
  const [categories, setCategories] = useState();

  const filtering = (id) => {
    let newMenu = MenuOptions.filter();
  };

  return (
    <div>
      <Categories />
      <Menu />
    </div>
  );
}

export default App;
