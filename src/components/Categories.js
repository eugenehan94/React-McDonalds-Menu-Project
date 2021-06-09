import MenuOptions from "./MenuOptions";

const Categories = ({ categories, filtering }) => {
  return (
    <div>
      {categories.map((item, id) => {
        return (
          <div key={id}>
            <button type="button" onClick={() => filtering(item)}>
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
