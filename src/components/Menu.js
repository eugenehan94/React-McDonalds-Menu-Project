import React from "react";

const Menu = ({ menus }) => {
  return (
    <div>
      <h1>Temporary Menu</h1>
      {menus.map((item, id) => {
        return (
          <div key={id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
