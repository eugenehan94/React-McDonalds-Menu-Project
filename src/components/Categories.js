import "../css/Categories.css";
import categoryPics from "./CategoryPics";
const Categories = ({ categories, filtering, fullMenu, selected }) => {
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
                <img src={categoryPics[id]} alt={item.title} />

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
