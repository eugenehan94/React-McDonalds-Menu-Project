import "../css/Categories.css";

const Categories = ({
  categories,
  filtering,
  fullMenu,
  selected,
  menuOptions,
}) => {
  return (
    <div>
      <div className="button-reset-container">
        <button type="button" onClick={() => fullMenu()}>
          View Temporary Limited Menu
        </button>
      </div>
      <div className="button-container">
        {categories.map((item, id) => {
          return (
            <div key={id} className={item === selected ? "active_choice" : ""}>
              <button
                type="button"
                className={item === selected ? "active_bold" : ""}
                onClick={() => filtering(item)}
              >
                menuOptions.
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
