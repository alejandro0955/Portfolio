import "./CategorySlider.css";

interface Props {
  options: string[];
  selected: boolean;
}

function CategorySlider(props: Props) {
  return (
    <>
      <div className="category-slider">
        {props.options.map((option) => (
          <button
            className="category"
            id={props.selected === true ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategorySlider;
