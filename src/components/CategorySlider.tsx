import "./CategorySlider.css";

interface Props {
  options: string[];
}

function CategorySlider(props: Props) {
  return (
    <>
      <div className="category-slider">
        {props.options.map((option) => (
          <button className="category">{option}</button>
        ))}
      </div>
    </>
  );
}

export default CategorySlider;
