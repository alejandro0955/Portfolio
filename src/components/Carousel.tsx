import "./Carousel.css";

interface Props {
  projects: Number[];
}

function Carousel(props: Props) {
  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          {props.projects.map(() => (
            <a className="project-dot"></a>
          ))}
        </div>
        <div className="arrow-container">
          <div className="arrows">
            <a className="arrow" id="arrow1">
              <img src="src/assets/arrow-left.png"></img>
            </a>
            <a className="arrow" id="arrow2">
              <img src="src/assets/arrow-right.png"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
