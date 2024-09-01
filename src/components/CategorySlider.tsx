import "./CategorySlider.css";

interface Props {
  options: string[];
  onSelect: (item: string) => void;
}

function CategorySlider(props: Props) {
  return (
    <>
      <div className="category-slider">
        {props.options.map((option) => (
          <button
            className="category"
            // id={props.selected === true ? "selected" : ""}
            onClick={() => {
              props.onSelect(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategorySlider;
